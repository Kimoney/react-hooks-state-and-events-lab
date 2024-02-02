import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode] = useState(false);
  const appClass = mode ? "App dark" : "App light";

  // Destructure and initiate state in the component
  // The setMode Function will be invoke in the function handling the click

  // const [mode, setMode] = useState(false);


  function handleDarkMode (event){
    console.log(event)
    setMode((mode) => !mode)
    
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{mode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
