import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt, reset } from "../../redux/actions/counterActions";
import "./Counter.css";



const Counter = () => {

  const dispatch= useDispatch()

  const count = useSelector((state) => state.counterReducer.counterSonuc)
  const text = useSelector((state) => state.counterReducer.text1)


  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{count}</h1>
     
      <div>
        <button
          className="counter-button positive"
          onClick={()=> dispatch(arttir())}
        >
          ARTTIR
        </button>
        <button
          className="counter-button zero"
          onClick={()=> dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={()=> dispatch(azalt())}
        >
         AZALT
        </button>

      </div>
      <h2>{text}</h2>
    </div>
  );
};

export default Counter;
