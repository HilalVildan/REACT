import React, { createContext, useEffect, useState } from "react";
import GosterUsers from "./pages/GosterUsers";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const changeWidth = (id, newWidth) => {
    setUser(()=>
    user.map((a)=>(a.id === id ? {...a, width : newWidth} : a)))
  };

  return (
    <UserContext.Provider value={{ user, changeWidth }}>
      <GosterUsers />
    </UserContext.Provider>
  );
};

export default App;
