import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  const name2 = "리웩트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <>
      {name === "리액트" ? <h1>리액트 입니다</h1> : <h1>리액트가 아닙니다.</h1>}
      {name2 === "리액트" && <h1>리웩트 아닙니다</h1>}
      <h1 style={style}>{name} 안녕!</h1>
      <h2 className="react">잘 작동하니?</h2>
    </>
  );
}

export default App;
