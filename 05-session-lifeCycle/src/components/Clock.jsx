import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = () => {
  const [zaman, setZaman] = useState(moment());


// ! componentDidMount = component ilk render edildiginde = []  
  useEffect(() => {
  const time =  setInterval(() => {
      setZaman(moment());
    //   console.log("merhaba");
    }, 1000);

    //!componentWillUnmount = component kapandiginda ya da baska sayfaya gidildiginde calisan durumu durdur ya da kapat
    return()=>{
        clearInterval(time)
        console.log("baska sayfaya gidildigi icin interval durdu.");
    }
  }, []);

  return (
    <div>
      {zaman.format("HH")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("mm")}
      {zaman.format("ss") % 2 === 0 ? ":" : " "}
      {zaman.format("ss")}
    </div>
  );
};

export default Clock;
