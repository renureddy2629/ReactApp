import React from 'react';
import '../App.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import ProfileImage from "../images/profile.png"

const Home = () => {
  return (
    <section style={{ flex: 1, height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3%', marginTop: '-16%' }} className="home">
      <div className="hero">
<<<<<<< HEAD
        <h1 className="heading" style={{ marginTop: '30px' }}>Renuka Pasam</h1>
        <h2 className="subheading">Software Developer and Tester</h2>
        <img src={ProfileImage} style={{ height: '10rem' }} />
=======
        <h1 className="heading"style={{ marginTop: '50px' }}>Renuka Pasam</h1>
        <h2 className="subheading">Software Developer and Tester</h2>
        <img src={ProfileImage} style={{ height: '15rem' }} />
>>>>>>> 2824dd45e053b8eb1d7f0698a7aed03184e65484
        <p className="intro">
          I'm a passionate software developer with experience in web development, automation testing, and quality assurance.
          I'm skilled in various technologies and always eager to learn new ones.
        </p>
        <Link className="button" to="/about">About Me</Link>
        <Link className="button" to="/portfolio">Projects</Link>
        <Link className="button" to="/contact">Contact Me</Link>
      </div>
    </section>
  );
};

export default Home;
