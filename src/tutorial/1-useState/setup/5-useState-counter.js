import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increaseMethod = () => {
    setValue(value + 1);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div>
        <section style={{ margin: "4rem 0" }}></section>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(0);
          }}
        >
          reset
        </button>
        <button className="btn" onClick={increaseMethod}>
          increase
        </button>
      </div>
      <div className="counterComplex">
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            complexIncrease();
          }}
        >
          increase later
        </button>
      </div>
    </>
  );
};

export default UseStateCounter;
