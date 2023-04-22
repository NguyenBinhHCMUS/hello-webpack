import { sum } from "./utils";
import domHandler from "./assets/dom";
import "./assets/style/style.css";
import "./assets/style/global.scss";

console.log(sum(1, 2));
// ES6 Spread Operator
const person = { name: "Duoc" };
const personClone = { ...person };
console.log("personClone", personClone);

// ES7 Object.values
console.log("Object.values", Object.values(personClone));

const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });

const callApi = async () => {
  const response = await getUser();
  console.log("User", response);
};

callApi();

domHandler();
