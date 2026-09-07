import React from "react";
import Button from "./Button";

function Footer({
  onAbout,
  onServices,
  onTheme,
  onLogin,
  onSignup
}) {

  return (

    <footer className="footer">

      <div className="copyright">
        © 2025 WebTech Practice. Built for learning and growth.
      </div>


      <div className="footer-buttons">

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

      </div>

    </footer>
  );
}

export default Footer;