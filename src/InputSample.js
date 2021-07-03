import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    alias: "",
  });

  const nameInput = useRef();
  const { name, alias } = inputs;

  // 여기서 e(이벤트객체 : 매개변수)가 의미 하는 것은, 아래 input에서 수정이벤트가 발생했을때 그 내용이 파라미터로 들어와서 사용할수 있게 된다.
  // 만약에 아래에서 console.log(e.target) 이라고 찍어보면 input, 즉 이벤트가 발생한 돔에 대한 정보를 갖고 있다.
  // 그래서 그 인풋에 있는 내용을 갖고 오고 싶으면 e.targert.value를 하면 인풋에 입력되는 내용이 나온다.
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      alias: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="name"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="alias"
        placeholder="alias"
        onChange={onChange}
        value={alias}
      />
      <button onClick={onReset}>Reset</button>
      <div>
        <b>Value : </b>
        {name} ({alias})
      </div>
    </div>
  );
}

export default InputSample;
