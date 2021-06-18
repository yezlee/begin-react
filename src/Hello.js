import React from "react";

// there are two ways to make a component
// function / class

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {/* {isSpecial ? <b>*</b> : null} */}
      {isSpecial && <b>*</b>}
      {/* and operator를 사용하게 되면 isSpecial이 참일때 이게 실행되고 
            참이 아니면 그냥 아무일도 안생기는..  */}
      <b>{isSpecial ? "Yes! " : "No "}</b>
      {/* 위처럼 내용이 있을때 삼항연산자를 쓰고 그게 아니면 앤드연산자 */}
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

// Conditional Rendering - 조건부렌더링이란 특정 조건이 참인지 거짓인지에 따라서 다른 결과를 나타내는 것이다.
