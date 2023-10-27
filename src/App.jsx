import { useState } from "react";
import "./App.css";

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
