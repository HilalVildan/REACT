import React, { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";

//! student objesi ve fonksiyon icin context create ediyoruz. disaridan alt componentlerden kullanima aciyoruz.
export const StudentContext = createContext();

const App = () => {
  const [student, setStudent] = useState(data);

  // console.log yerine yapilabilir. daha güzel gözüküyyor.
  console.table(student);

  const changeColor = (id, newColor) => {

    setStudent(
      student.map((a)=>a.id===id ? {...a, color: newColor} : a)
    )


    //dizideki renkkleri degistirmek icin
  };

  return (
    <StudentContext.Provider value={{student, changeColor}}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;
