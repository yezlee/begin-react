import React, { useReducer } from "react";

function reducer(state, action) {
  // 현재 상태와 액션객체를 파라미터로 받아와서 새로운 상태를 반환해주는 형태를 갖추고 있어야 한다.
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      // return state; 이렇게 해줘도 되고 에러를 던져도 되고
      throw new Error("Unhandled action");
  }
}

function Counter() {
  // reducer라는 함수를 만들고 나서, useReducer를 사용할건데
  // useReducer를 사용할 때 첫번째로는 현재의 상태(여기서는 number)가 오고, 두번째 값으로는 dispatch라는 함수가 온다.
  // dispatch는 보내다라는 뜻을 가지고 있는데 여기서는 액션을 발생시킨다. 라고 이해하면 된다.
  const [number, dispatch] = useReducer(reducer, 0);
  // 첫번째 파라미터값은 우리가 만든 reducer함수, 두번째 값으로는 useReducer에서 사용하고 싶은 초기값/기본값을 넣어주면된다.

  const onIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const onDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
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
    useReducer()
    (이전에 우리가 컴포넌트 상태를 업데이트 해야할 때는, useState()를 사용해서 새로운 상태를 설정했는데)
    둘이 어떤 차이가 있냐면, 
    일단 useState()에서는 설정하고 싶은 다음 상태를 직접 지정해주는 방식으로 상태를 업데이트하는 반면에,
    useRecucer()는 action이라는 객체를 기반으로 상태를 업데이트 한다. 여기서 action객체라는 것은 업데이트 할 때 참조하는 객체이다.
    액션안에 디스패치가 있나?
    dispatch({
      type : 'INCREMENT', - type이라는 값을 사용해서 어떤 업데이트를 진행할건지 명시를 할 수 있고
      diff : 4  - 업데이트할때 필요한 참조하고 싶은 다른 값이 있다면 이 객체안에 넣을 수도 있다.
    })

    이 useReducer라는 hook함수를 사용하면 컴포넌트 상태 업데이트 로직을, 컴포넌트에서 분리 시킬수가 있다. 
    즉 컴포넌트 밖으로 분리가 가능하다. 심지어 다른 파일에 작성 후 불러와서 사용할 수도 있다.

    여기서 reducer라는 개념은 '상태를 업데이트 하는 함수'이다.

*/
/*
    useState()라는 함수를 통해서 바뀌는 값을 관리하고
    기본값은 useState()함수의 파라미터로 넘겨주면 된다.
    이 함수는 배열을 반환하게 되는데 
    - 첫번째 원소는 현재 상태, 
    - 두번째 원소는 현재 상태를 바꾸는 함수가 있고

    함수에다가 새로운 상태(ex : number + 1)를 넣어서 호출해주면 거기에 따라 값이 바뀌게 되고 그 바뀐값을 h1태그에서 보이도록 설정해놓음
*/
