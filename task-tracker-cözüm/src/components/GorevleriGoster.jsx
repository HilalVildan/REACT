import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const GorevleriGoster = ({ görevler, setGörevler }) => {



  const deleteGörev=(id)=>{

    setGörevler(görevler.filter((i)=>i.id !==id))

  }

  return (
    <div>
      {görevler.map((görev) => {
        const { id, text, day, bittiMi } = görev;

        return (
          <div
            className={bittiMi ? "trueStil" : "falseStil"}
            key={id}
            onDoubleClick={() =>
              setGörevler(
                görevler.map((i) =>
                  i.id === id ? { ...i, bittiMi: !i.bittiMi } : i
                )
              )
            }
          >
            <h3>
              {" "}
              {text} <FaTimesCircle style={{ color: "red" }}  onClick={()=> deleteGörev(id)}/>{" "}
            </h3>
            <h6> {day} </h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
