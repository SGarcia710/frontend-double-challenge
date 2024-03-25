import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import LogoutIcon from "../assets/logout-icon.svg?react";
import { Header } from "../components/Header";
import "../assets/styles/Root.css";
import { Button } from "../components/Button";

interface Animal {
  name: string;
  img: string;
}

export const Root = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const token = useMemo(() => localStorage.getItem("token"), []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleOnLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const fetchRandomAnimal = async () => {
    try {
      const response = await axios.get("http://localhost:3000/randomAnimal", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAnimal(response.data.animal);
    } catch (error) {
      console.error("Failed to fetch random animal");
    }
  };

  return (
    <div className="root-container">
      <div className="root-body">
        <Header />

        <Button onClick={fetchRandomAnimal} text="RANDOM ANIMAL" />

        {animal && (
          <>
            <p className="animal-name">{animal.name}</p>
            <img className="animal-image" src={animal.img} alt={animal.name} />
          </>
        )}

        <button className="logout-button" onClick={handleOnLogout}>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};
