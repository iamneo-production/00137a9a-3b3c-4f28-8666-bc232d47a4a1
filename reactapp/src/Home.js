import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";


import { useSelector } from 'react-redux';

  function Home() {
  const name = useSelector((state) => state.name);
  return (
   
    <div className="home-container">
        <Navbar/> 
      <h2 className="home-heading">Welcome to the Volunteer Platform {name}</h2>
      <p className="home-description">
        Thank you for joining our volunteer platform! Together, we can make a difference in the
        world.
      </p>
      <p className="home-message">
        "The best way to find yourself is to lose yourself in the service of others." - Mahatma
        Gandhi
      </p>
      <p className="home-mess">
            Volunteering plays a vital role in our communities and society as a whole. It involves individuals dedicating their time, skills, and efforts to various causes and initiatives without expecting financial compensation. From assisting at local soup kitchens and food banks to tutoring students and participating in environmental conservation efforts, volunteers make a positive impact on the lives of others and the environment. They contribute to the well-being of the less fortunate, support educational growth, and help protect and preserve our planet. Volunteering also fosters a sense of fulfillment, purpose, and belonging, as individuals work together to build stronger communities. Moreover, volunteers often develop valuable skills, enhance their physical and mental well-being, and expand their social networks through meaningful connections with like-minded individuals. Ultimately, volunteering is a selfless and transformative act that not only benefits the recipients but also brings personal growth and a sense of joy to those who give their time and energy to serve others and make the world a better place.
      </p>
      
      <Link to="/VolunteerOpportunities" className="home-link">
        Explore Volunteer Opportunities
      </Link>
    </div>
  );
}

export default Home;
