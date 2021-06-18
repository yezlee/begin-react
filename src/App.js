import { black } from "chalk";
import Hello from "./Hello.js";
import Wrapper from "./Wrapper.js";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;

// App.js에서 우리가 Hello 컴포넌트한테 넣어준 name, color 이게 바로 props이다.
// 그러면 Hello 컴포넌트는 props라는 값을 파라미터를 통해서 받을수 있다

// Wrapper에서는 children이라는 props를 사용했는데, App.js에 <Wrapper>태그 안에 있는 내용을 의미하는게 바로 children이다.
