import React from "react";
import './index.css';
import "./test";


// ** This is one type of Method (JSX)

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello I am coming from app!</h1>
//     </div>
//   );
// }


// This is onether type of Method  
// function App() {
//   return React.createElement("h1", {className:"heading"}, "Hello Krishna! Welcome to React Js World!!!")

// }

// wirtten in JSX model 


// adding functions in jsx This is one type of code  


// function App(){

//   const firstName = "Krishna";
//   const lastName = "Prasad";
  
//   return (
//     <section>
//     <div className="totalpage">
//       <h1>Hello! {firstName + " " + lastName}</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//         Maecenas in placerat est, posuere aliquam ipsum. Donec 
//         ante odio, consectetur in orci quis, consectetur commodo 
//         lectus. Integer hendrerit arcu non quam commodo iaculis. 
//         Aenean ut eros non neque interdum tempus id ut felis. 
//         Pellentesque eget posuere velit. In ullamcorper at dolor 
//         sit amet iaculis.</p>
//     </div>
//     </section>
//   );
// };


// This onether type of adding js functions in jsx

function Test (){
  return (
      <section className="container">
          <h1>Hello {new Date().toLocaleTimeString()} </h1>
      </section>
  );
};

function App(){

   let user = {
     firstName: "Krishna Prasad",
     lastName: "Reddy",
   };

   function printName(user){
    return `My Full Name is ${user.firstName} ${user.lastName}`;
   };

   return (
    <section className="test">
      <Test />
      <div>
        <h1>Hello! {printName(user)} </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Maecenas in placerat est, posuere aliquam ipsum. Donec 
         ante odio, consectetur in orci quis, consectetur commodo 
         lectus. Integer hendrerit arcu non quam commodo iaculis. 
         Aenean ut eros non neque interdum tempus id ut felis. 
         Pellentesque eget posuere velit. In ullamcorper at dolor 
         sit amet iaculis.</p>
      </div>
    </section>
   );

};


export default App;


// Rendering 




