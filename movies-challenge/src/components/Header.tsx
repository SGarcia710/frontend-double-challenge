import Logo from "../assets/te-logo-small.svg?react";
import "../assets/styles/Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <Logo />

      <h3 className="header-title">Tenant Movies Search</h3>
    </div>
  );
};
