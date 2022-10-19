import { useState } from "react";

const Hooks = () => {
  //useState her zaman en tepeye yazılması tercih edilir ki altındaki kodlar tekrar çalışsın
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    isim: "hilal",
    email: "hilal@gmail.com",
    yas: 26,
  });

  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    setCount(count - 1);
  };

  const degistir = () => {
    if (info.isim === "hilal") {
      setInfo({
        isim: "hilmi",
        email: "hilmi@gmail.com",
        yas: 28,
      });
    } else {
      setInfo({
        isim: "hilal",
        email: "hilal@gmail.com",
        yas: 26,
      });
    }
  };

  return (
    <div className="container">
      <h2>
        ****************************************************************************
      </h2>
      <h1>USESTATE</h1>
      <h2>COUNT:{count}</h2>
      <button className="btn btn-primary" onClick={arttir}>
        ARTTIR
      </button>
      <button className="btn btn-danger" onClick={azalt}>
        AZALT
      </button>
      <button className="btn btn-warning" onClick={() => setCount(0)}>
        TEMIZLE
      </button>
      <h1>
        *************************************************************************
      </h1>

      <div className="text-center mt-4">
        <h1 className="text-danger">OBJECT ILE USESTATE KULLANIMI</h1>
        <h2>{info.isim}</h2>
        <h5>{info.email}</h5>
        <h5>{info.yas}</h5>
        <button className="btn btn-danger" onClick={degistir}>
          DEGITIR
        </button>
      </div>
    </div>
  );
};

export default Hooks;
