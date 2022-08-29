import React, { useState } from "react";

const UseStateObject = () => {
  const [person, SetPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    SetPerson({ ...person, message: "Hello World" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
