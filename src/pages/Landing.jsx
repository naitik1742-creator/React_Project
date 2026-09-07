import React, { useState } from "react";
import "./Landing.css";

import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Div from "../components/Div"
import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";
import Footer from "../components/Footer";

function Landing() {

  

  const [darkMode, setDarkMode] = useState(false);


  

  const slides = [
    {
      title: "Complete Auth Flow",
      text: "Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions."
    },
    {
      title: "Modern Dashboard",
      text: "Responsive dashboard layouts designed for practicing modern frontend development."
    },
    {
      title: "Easy LocalStorage",
      text: "Store and manage user information directly in the browser using localStorage."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);


  
  const nextSlide = () => {
    setCurrentSlide((previous) =>
      previous === slides.length - 1
        ? 0
        : previous + 1
    );
  };


  
  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0
        ? slides.length - 1
        : previous - 1
    );
  };


  

  const goToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };


  

  const handleLogin = () => {
    alert("Login page will open here.");
  };

  const handleSignup = () => {
    alert("Sign Up page will open here.");
  };


  return (

    <div className={darkMode ? "app dark" : "app"}>

    

      <Header
        onAbout={() => goToSection("about")}
        onServices={() => goToSection("services")}
        onTheme={() => setDarkMode(!darkMode)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />


      

      <Section className="hero">

        <Div className="hero-left">

          <h1>
            Launch your Web Tech
            <br />
            practice site in minutes
          </h1>

          <Paragraph>
            A clean, modern starter template with Login, Signup,
            Dashboard, Profile & Logout pages using only HTML/CSS/JS
            and browser localStorage. Perfect for learning and
            practicing web development fundamentals.
          </Paragraph>


          <Div className="hero-buttons">

            <Button
              className="primary-btn"
              onClick={handleSignup}
            >
              Sign Up
            </Button>


            <Button
              className="secondary-btn"
              onClick={handleLogin}
            >
              I already have an account
            </Button>

          </Div>

        </Div>


        

        <Div className="slider">

          <Button
            className="slider-btn"
            onClick={previousSlide}
          >
            ‹
          </Button>


          <Div className="slider-content">

            <h2>
              {slides[currentSlide].title}
            </h2>

            <Paragraph>
              {slides[currentSlide].text}
            </Paragraph>

          </Div>


          <Button
            className="slider-btn"
            onClick={nextSlide}
          >
            ›
          </Button>


          

          <Div className="dots">

            {slides.map((slide, index) => (

              <span
                key={index}
                className={
                  currentSlide === index
                    ? "dot active"
                    : "dot"
                }
                onClick={() => setCurrentSlide(index)}
              ></span>

            ))}

          </Div>

        </Div>

      </Section>


  

      <Section
        className="about"
        id="about"
      >

        <h2>
          About This Project
        </h2>


        <Paragraph className="about-text">

          This comprehensive template is designed for students
          and developers to practice modern web fundamentals—
          responsive layouts, accessible forms, client-side state
          management, and component architecture—without any
          frameworks or complex build processes.

        </Paragraph>


        <Div className="about-list">

          <Div className="about-item">
            Single-file pages you can open directly in any modern browser
          </Div>

          <Div className="about-item">
            Responsive layouts for desktop, tablet and mobile
          </Div>

          <Div className="about-item">
            Accessible forms with client-side validation
          </Div>

          <Div className="about-item">
            LocalStorage based user data management
          </Div>

          <Div className="about-item">
            Light and dark theme support
          </Div>

          <Div className="about-item">
            Reusable React component architecture
          </Div>

        </Div>

      </Section>


    

      <Section
        className="included"
        id="services"
      >

        <h2>
          What's Included
        </h2>


        <Div className="card-grid">

          <Card
            title="Authentication Templates"
            text="Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration."
          />

          <Card
            title="Dashboard"
            text="A responsive dashboard layout for displaying user information and application data."
          />

          <Card
            title="Profile"
            text="A profile page where users can view and update their personal information."
          />

          <Card
            title="Password Update"
            text="Secure frontend password update interface with validation and confirmation."
          />

          <Card
            title="Theme System"
            text="Switch between light and dark themes with smooth UI transitions."
          />

          <Card
            title="Responsive Design"
            text="The complete interface works across desktop, tablet and mobile screens."
          />

        </Div>

      </Section>


    

      <Footer
        onAbout={() => goToSection("about")}
        onServices={() => goToSection("services")}
        onTheme={() => setDarkMode(!darkMode)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />

    </div>
  );
}

export default Landing;