import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from './components/About';

function App() {
  const [count, setCount] = useState(0);

  // const setNew = (res)=>{
  //    setCount(res);
  // }

  return (
    <div>
        <Header />    
        <About/>
    </div>
  );
}

export default App;
