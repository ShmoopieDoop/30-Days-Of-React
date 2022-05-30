import React from "react";
import ReactDOM from "react-dom";
import cssLogo from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import reactLogo from "./images/react_logo.png";
import profilePic from "./images/asabeneh.jpg";
import skills from "./skills";

const header = (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Tom Malhi</p>
    </div>
  </header>
);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <div>
        <img src={cssLogo} alt="css logo" />
        <img src={htmlLogo} alt="html logo" />
        <img src={reactLogo} alt="react logo" />
      </div>
    </div>
  </main>
);

const subscribeBox = (
  <div className="subscribe">
    <h1 className="subscribe-title">SUBSCRIBE</h1>
    <p className="subscribe-desc">
      Sign up with your email address to receive news and updates.
    </p>
    <div className="subscribe-inputs">
      <input placeholder="First name"></input>
      <input placeholder="Last name"></input>
      <input placeholder="Email"></input>
    </div>
    <button className="subscribe-button">Subscribe</button>
  </div>
);

const skillsFormated = skills.map((skill, index) => (
  <li key={index}>{skill}</li>
));

const checkMark = (
  <div className="check-mark">
    <div className="check-mark-circle"></div>
    <div className="check-mark-rect-s"></div>
    <div className="check-mark-rect-l"></div>
  </div>
);

const clock = (
  <div className="clock">
    <div className="clock-circle"></div>
    <div className="clock-short-hand"></div>
    <div className="clock-long-hand"></div>
  </div>
);

const date = "Oct 2 2020";

const userCard = (
  <div className="user-card">
    <img src={profilePic} alt="profile" />
    <div className="user-name">
      <h1>ASABENEH YETAYEH</h1>
      {checkMark}
    </div>
    <h2 className="user-info">Senior Developer, Finland</h2>
    <h2 id="skills-tag">Skills</h2>
    <ul className="skills">{skillsFormated}</ul>
    <div className="date-joined">
      {clock}
      <p>Joined on {date}</p>
    </div>
  </div>
);

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const hexaStyle = (color) => {
  return {
    backgroundColor: color,
    width: "auto",
    height: 50,
    borderRadius: 5,
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: 1,
    padding: 10,
  };
};

const RandColors = () => {
  const color = hexaColor();
  return (
    <div style={hexaStyle(color)}>
      <p>{color}</p>
    </div>
  );
};

// JSX element, app, a container or a parent
const App = () => (
  <div className="app">
    <div className="container">
      {header}
      {main}
      {subscribeBox}
      {userCard}
      <RandColors></RandColors>
      <RandColors></RandColors>
      <RandColors></RandColors>
      <RandColors></RandColors>
      <RandColors></RandColors>
    </div>
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

