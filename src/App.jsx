import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./ui/card";
import CardFull from "./ui/CardFull";

import Header from "./components/header";
import About from './components/About';

function App() {
  const [count, setCount] = useState(0);

  // const setNew = (res)=>{
  //    setCount(res);
  // }

  return (
    <div>
        {/* <img src={}/> */}
        <Header />    
        <About/>
    </div>
  );
}

export default App;
