import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
    // 파라미터로 받아온 e - event객체가 의미하는것은,
    // 만약에 아래 input태그에서 수정이벤트가 발생했을때, 이벤트에 대한 내용이 이 파라미터 객체로 받아와져서 사용할수 있게 되는것이다.
    // 이벤트안에 있는 e.target라는 값은 현재 input, 이벤트가 발생한 돔에 대한 정보를 가지고 있다. 실제로 값을 인풋태그안에  <input>이라고 태그만 콘솔창에 출력된다.
    // e.target.value 이라고 하면 실제로 내가 인풋창에 입력한 값들이 콘솔창에 출력됨.
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>Init</button>
      <div>
        <b>Value : </b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;
