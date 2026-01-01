import React from "react";

const Child = ({ onSendData }) => {
  function Child() {
    onSendData('Hello from child');
  }
  return (
    <div>
      <h3>Click to send data to Parent</h3>
      <button onClick={Child}>click</button>
    </div>
  );
};

export default Child;
