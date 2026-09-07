import React from "react";
import Button from "./Button";

function Header({
  onAbout,
  onServices,
  onTheme,
  onLogin,
  onSignup
}) {

  return (
    <header className="header">

      <div className="logo">
        WebTech Practice
      </div>


      <nav className="nav">

        <Button
          className="nav-btn"
          onClick={onAbout}
        >
          About
        </Button>


        <Button
          className="nav-btn"
          onClick={onServices}
        >
          Services
        </Button>


        <Button
          className="nav-btn"
          onClick={onTheme}
        >
          Theme
        </Button>


        <Button
          className="nav-btn"
          onClick={onLogin}
        >
          Login
        </Button>


        <Button
          className="signup-btn"
          onClick={onSignup}
        >
          Sign Up
        </Button>

      </nav>

    </header>
  );
}

export default Header;