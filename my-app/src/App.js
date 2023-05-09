import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [pages] = useState(["home", "about", "contact", "services", "portfolio"]);

  const pagesJSX = pages.map((page, index) => (
    <div key={index}>{page}</div>
  ));

  return <div>{pagesJSX}</div>;
}

export default App;




/*EASY: ["home", "about", "contact", "services", "portfolio"]

HARD: [ { name: "home", url: "/home" }, { name: "about", url: "/about" }, { name: "contact", url: "/contact" }, { name: "services", url: "/services" }, { name: "portfolio", url: "/portfolio" } ];

In App.js 

Make this array into state.
Loop through this array of data and make an array of JSX (divs with the pages)

HARD: make them links with the url property as the src.


Put the JSX in the return of App.js.*/ 