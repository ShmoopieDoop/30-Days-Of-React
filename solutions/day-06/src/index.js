import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { tenHighestPopulation } from "./populationData";

const checkPrime = (n) => {
  if (n < 2) {
    return false;
  }
  let i = 2;
  while (i < n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};
const checkOdd = (n) => {
  return n % 2 === 1;
};

const numberStyle = (n) => {
  let color;
  if (checkPrime(n)) {
    color = "#fd5e53";
  } else if (checkOdd(n)) {
    color = "#fddb3a";
  } else {
    color = "#21bf73";
  }
  return {
    backgroundColor: color,
  };
};

const Numbers = ({ start, end }) => {
  const arr = [...Array(end - start).keys()];
  const nums = arr.map((n) => (
    <div style={numberStyle(n)} className="grid-item">
      {n}
    </div>
  ));
  return <div className="grid">{nums}</div>;
};

const randColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const Colors = ({ count }) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const color = randColor();
    colors.push(
      <div style={{ backgroundColor: color }} className="grid-item" id="colors">
        {color}
      </div>
    );
  }
  return <div className="grid">{colors}</div>;
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const PopulationGraph = ({ name, data }) => {
  const maxPopulation = data[0].population;
  const countryNames = data.map((obj) => <div>{obj.country}</div>);
  const bars = data.map((obj) => (
    <div className="bar-wrapper">
      <div
        className="bar"
        style={{ width: `${(100 * obj.population) / maxPopulation}%` }}
      ></div>
    </div>
  ));
  const populations = data.map((obj) => (
    <div>{numberWithCommas(obj.population)}</div>
  ));
  return (
    <div>
      <h1 className="graph-title">{name}</h1>
      <div className="graph">
        <div className="country-names">{countryNames}</div>
        <div className="bars">{bars}</div>
        <div className="population">{populations}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>30 Days Of React</h1>
        <h2>Number Generator</h2>
      </div>
      <Numbers start={0} end={32} />
      <br />
      <Colors count={32} />
      <br />
      <PopulationGraph
        name={"10 Most Populated Countries"}
        data={tenHighestPopulation}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
