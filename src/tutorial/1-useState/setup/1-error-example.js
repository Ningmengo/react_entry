import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello world";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>useState error example</h2>
      <button type="butotn" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};
export default ErrorExample;
