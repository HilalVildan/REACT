import React, { useState } from "react";

const GorevEkle = ({ görevler, setGörevler }) => {
  const [text1, setText] = useState("");
  const [date, setDate] = useState("");
  // console.log(text1, date);

  const yapSubmit = (e) => {
    e.preventDefault()
    setGörevler([
      { id: görevler.length+1, text: text1, day: date, bittiMi: false },
      ...görevler,
    ]);
    setText("");
    setDate("")
  };

  return (
    <div>
      <form onSubmit={yapSubmit}>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input
            type="text"
            id="text"
            placeholder="Add Task"
            name="text"
            value={text1}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            type="date"
            id="day"
            name="day"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default GorevEkle;
