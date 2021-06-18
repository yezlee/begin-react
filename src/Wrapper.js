import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: 16,
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;

// export default function Wrapper() {
//   const style = {
//     border: "2px solid black",
//     padding: 16,
//   };

//   return <div> style ={style} </div>;
// }

// Wrapper에서는 children이라는 props를 사용했는데, App.js에 <Wrapper>태그 안에 있는 내용을 의미하는게 바로 children이다.
