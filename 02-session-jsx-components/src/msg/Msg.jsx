//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

import Clock from "../clock/Clock";
import resim from "../img/tree.webp";

//!external css
import "./Msg.css";

//!internal css
const styleA = {
  color: "green",
  fontFamily: "Tahoma",
  border: "1px solid red",
};

const Msg = () => {
  return (
    <div>
      <h2 style={styleA}>Burasi msg alani</h2>
      <p style={{ color: "red" }}>Hosgeldin REACT</p>

      <img
        className="msg-img"
        src="https://cdn.pixabay.com/photo/2022/04/05/00/27/man-7112557__340.jpg"
        alt=""
      />

      <img className="msg-img" src={resim} alt="" />
      <Clock />
    </div>
  );
};

export default Msg;