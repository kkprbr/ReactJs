import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Test from "./test"
import './index.css';
import Prop from "./props";



// function PrintName(){
//   return <h1>Hello React Js!</h1>
// }

// ReactDOM.render(<PrintName />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));

// setInterval(() => {
//   root.render(
//     <App />
//   );
// }, 1000);
root.render(
  <Test />
  // <Prop />
);
