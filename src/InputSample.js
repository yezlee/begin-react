import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    alias: "",
  });

  const { name, alias } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    // const nextInputs = {
    //   ...inputs,
    //   [name]: value,
    // };

    // nextInputs[name] = value;

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
  };

  return (
    <div>
      <input name="name" placeholder="name" onChange={onChange} value={name} />
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
