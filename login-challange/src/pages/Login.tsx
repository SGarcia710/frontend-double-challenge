import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "../assets/styles/Login.css";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

interface LoginFormInput {
  username: string;
  password: string;
  otp?: string;
}

export const Login = () => {
  const { register, handleSubmit, watch, resetField } =
    useForm<LoginFormInput>();
  const username = watch("username");
  const password = watch("password");

  const [backendError, setBackendError] = useState<string | null>(null);
  const [requiresOTP, setRequiresOTP] = useState<boolean>(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const onSubmit: SubmitHandler<LoginFormInput> = async (
    data: LoginFormInput
  ) => {
    console.log(data);
    try {
      let response;
      if (data.otp) {
        response = await axios.post("http://localhost:3000/login", {
          username: data.username,
          password: data.password,
          otp: data.otp,
        });
      } else {
        response = await axios.post("http://localhost:3000/login", {
          username: data.username,
          password: data.password,
        });
      }

      if (response.data.message === "otp required") {
        setRequiresOTP(true);
      } else if (response.data.message === "success") {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      if (error.response) {
        const {
          data: { message },
        } = error.response;

        setBackendError(message);
        setTimeout(() => {
          setBackendError(null);
        }, 3000);
      }
    }
  };

  useEffect(() => {
    if (!!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (requiresOTP) {
      setRequiresOTP(false);
      resetField("otp");
    }
  }, [username, password]);

  return (
    <div className="login-container">
      <div className="login-body">
        <Header />
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <p className="login-title">Login</p>

          {backendError && <div className="login-error">{backendError}</div>}

          <Input label="Username" {...register("username")} />
          <Input label="Password" {...register("password")} type="password" />
          {requiresOTP && (
            <Input
              label="Code"
              {...register("otp", { required: "OTP is required" })}
            />
          )}

          <Button
            style={{
              marginTop: "16px",
            }}
            type="submit"
            text="Login"
          />
        </form>
      </div>
    </div>
  );
};
