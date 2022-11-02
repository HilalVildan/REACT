import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import data from "../data";

const CardDetails = () => {
  const navigate = useNavigate();

  const { name } = useParams();
  console.log(name); //mesela CSS
  /* datanın içinde gezin, datada sıradaki name, benim useParams la buraya aldığım name aynı olduğunda, o elemanın bilgilerini bastır */

  return (
    <div className="container text-center mt-4">
      {data.map(
        (i) =>
          i.name === name && (
            <div key={i.id}>
              <h3>{i.name}</h3>
              <img src={i.img} width="300px" alt="" />
              <h3>{i.text}</h3>
              <div>
                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-primary"
                >
                  Go Back
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="btn btn-danger"
                >
                  Go Home
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CardDetails;
