// const Msg = (props) => {
//   console.log(props);
//   const { isim, telefon } = props;
//   return (
//     <div>
//       <h1>Hello I am {isim}</h1>
//       <h4>Telefon numaram {telefon}</h4>
//     </div>
//   );
// };

// export default Msg;


//!daha gelir gelmez parcalamak icin bu yöntem de kullanilabilir
const Msg = ({ isim, telefon } ) => {
  return (
    <div>
      <h1>Hello I am {isim}</h1>
      <h4>Telefon numaram {telefon}</h4>
    </div>
  );
};

export default Msg;
