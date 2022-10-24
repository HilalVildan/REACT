// import LifeCycleMethods from "./components/LifeCycleMethods";
import "./App.css";
import Clock from "./components/Clock";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import OrnekUseEffect from "./components/OrnekUseEffect";

function App() {
  const[göster, setGöster]= useState(true)
  return (
    <div className="container text-center mt-4">
      {/* <LifeCycleMethods/> */}
      <button className="btn btn-danger" onClick={() => setGöster(!göster)}>
        GÖSTER
      </button>

      {/* {göster && <Clock/> } */}

      {göster ? <Clock /> : ""}

      {göster ? <OrnekUseEffect/> : ""}

      {/* göster true iken clock componenti görünsün false durumunda hicbir sey yapma manasina gelir. */}
      {/* &&(ve) iki parametre dogruyken kullanilir. ||(veya) soldaki ya da sagdaki dogruysa, hangisi true ise onu */}
    </div>
  );
}

export default App;
