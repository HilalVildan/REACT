import React, { useContext } from "react";
import { UserContext } from "../App";

const AnaUser = ({ user }) => {
  const { changeWidth } = useContext(UserContext);

  return (
    <div>
      {user.map((i) => {
        return (
          <div key={i.id}>
            <h3>{i.login}</h3>
            <img src={i.avatar_url} alt="" width={i.width}/>
            <div>
              <label htmlFor={i.id}>Image width(px)</label>
              <input
                id={i.id}
                type="number"
                onChange={(e) => changeWidth(i.id, e.target.value)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnaUser;
