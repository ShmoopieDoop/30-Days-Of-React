import countries from "./countries.js";
import webTechs from "./webTechs.js";

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

text = text.split(".").join("");
text = text.split(",").join("");
text = text.split(" ");
console.log(text);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.push("Meat");
shoppingCart.push("Sugar");
let teaIndex = shoppingCart.indexOf("Tea");

shoppingCart[teaIndex] = "GreenTea";

if (countries.indexOf("Ethiopia") != -1) {
  console.log("ETHEIOPIA");
} else {
    countries.push("Ethiopia");
}

if (webTechs.indexOf("Saas") != -1) {
  console.log("Sass is a CSS preprocess");
} else {
    webTechs.push("Saas");
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd + backEnd;

console.log(fullStack)

