import React, { useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const MouseKeyboard = () => {
  const [xEkseni, setXekseni] = useState(0);
  const [yEkseni, setYekseni] = useState(0);

  const mouseOlayi = (e) => {
    // https:developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX
    //!pageX ve pageY komutunu kullanırsanız, bulunduğunuz sayfanın
    //! sol üst köşesini 0-0 kabul eder, ona göre konum bildirir
    setXekseni(e.pageX);
    setYekseni(e.pageY);
  };

  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center ">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <p>X ve Y</p>
      <p className="text-danger fw-bold">
        {xEkseni} {yEkseni}
      </p>

      <div
        className="bg-success text-ligth w-50 p-4"
        id="coord"
        onMouseMove={mouseOlayi}
      >
        KOORDINATLAR <FaCanadianMapleLeaf />
      </div>
    </div>
  );
};

export default MouseKeyboard;
