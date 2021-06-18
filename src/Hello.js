import React from "react";

// there are two ways to make a component
// function / class

function Hello({ color, name }) {
  return (
    <div
      style={{
        color: color,
      }}
    >
      Hello, world! {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "No name",
};

export default Hello;

// Hello 컴포넌트는 props라는 값을 파라미터를 통해서 받을수 있다
// 저렇게 object destructuring을 해주면, 비구조할당을 해주면 바로 추출해서 사용할 수가 있다.

// 기본값을 설정해주기 위해선 defaultProps 라는것을 사용하면 된다.
