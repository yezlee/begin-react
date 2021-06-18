import React, { useState } from "react";
// 이렇게 하면 react에서 useState라는 함수를 불러오는 것

function Counter() {
  const [number, setNumber] = useState(50);
  //   위 코드는 우리가 number라는 상태를 만들건데 이 상태의 기본값은 0으로 하겠다. setNumber는 0이라고 적혀있는 자리의 상태를 바꿔주는 함수!이다.
  /*
    const numberState = useState(0);
    const number = numberState[0]; 원래는 이렇게 numberState의 첫번째 인덱스
    const setNumber = numberState[1]; 얘는 두번째 인덱스 이렇게 해줘야 하는데
    object destructuring을 통해서 배열로 저렇게 만들어서 한번에 넣어줄수 있는것이다.
*/

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    //setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
    // 이렇게 '이 값을 어떻게 업데이트 할 것이다'라는 로직이 있는 함수를 넣어줄수도 있는데 이런 함수를 '업데이트 함수' 라고 부른다.
    // 리액트 컴포넌트를 최적화 해주는 단계에서 이렇게 하는 '함수형 업데이트'가 필요하다.
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

/*
    useState()라는 함수를 통해서 바뀌는 값을 관리하고
    기본값은 useState()함수의 파라미터로 넘겨주면 된다.
    이 함수는 배열을 반환하게 되는데 
    - 첫번째 원소는 현재 상태, 
    - 두번째 원소는 현재 상태를 바꾸는 함수가 있고

    함수에다가 새로운 상태(ex : number + 1)를 넣어서 호출해주면 거기에 따라 값이 바뀌게 되고 그 바뀐값을 h1태그에서 보이도록 설정해놓음
*/
