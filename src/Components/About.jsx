/**
 * About component
 *
 * Space to describe more about yourself.
 */

import React from "react";

// About background image
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

// Short description that expands on your title on the Home component.

const description =
  "I'm a Software Engineering student at Kirinyaga University. I enjoy building robust and user-friendly web applications.";

/**
 * List of some skills or technologies you work on, are learning,
 * passionate about, or enjoy.
 */
const skillsList = ["Frontend Development", "React", "JavaScript", "HTML & CSS", "Bootstrap 5"];

// A detailed description or a quote that describes you.
const detailOrQuote =
  "I'm passionate about creating visually appealing, user-friendly, and responsive web applications.";

// About component
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            listStyleType: "none",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ marginBottom: "0.5rem" }}>
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
