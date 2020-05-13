import React from "react";

const RandomColor = (WrappedComponent) => {
  const color = ["red", "blue", "orange", "green", "yellow", "pink"];
  const randomColor = color[Math.floor(Math.random() * 5)];
  const className = randomColor + "-text";
  return () => {
    return (
      <div className={className}>
        <WrappedComponent  />
      </div>
    );
  };
};

export default RandomColor;
