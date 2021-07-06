import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 이렇게 useState로 감싸주면, 즉 바깥으로 빼주면 밖에서도 이걸 쓸수 있게 해주는것임.. (? 근데 원래도 썼던게..아닌가..)
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "heemong",
      email: "heemong9@gmail.com",
    },
    {
      id: 3,
      username: "devyez",
      email: "dev.yezlee@gmail.com",
    },
  ]);

  const nextId = useRef(4);
  // 위에 아이디가 3까지 있으니까 4로 해주고
  // 담에 또 새로운 아이디, nextId가 생기는거를 위해서 함수를 만들거

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    // 위에처럼 spread 문법말고 concat 문법을 써도 됨. push는 안돼!!!! spread or concat 이거 둘중하나만.
    // setUsers(users.concat(user)); 결과는 같다.

    setInputs({
      username: "",
      email: "",
    });

    console.log(nextId.current); //4
    //새로 만들때마다 현재 아이디가 뭔지 알고싶음 위와같은 코드를 작성하고
    nextId.current += 1;
    //이렇게 하면 onCreate() 함수가 실행될때마다 현재 아이디한테 1을 더해주니까.

    //nextId를 useRef로 관리하는 이유는 새로운 값이 입력될때마다 업데이트 되서 리렌더링 할 필요가 없어서 useRef를 쓴다.
    //useState로 써도 상관은 없는데, 굳이 왜? 이런거지. 리렌더링 할 필요가 없는데.

    // 정리 : useRef는 특정 돔을 선택할 떄도 ref속성을? 이용해서 사용할 수도 있지만,
    // 컴포넌트가 리렌더링돼도 기억하고 싶은 값이 있을때도 useRef를 쓴다.
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      {/* 이렇게 하면 위에 적은 users를 UserList 컴포넌트에 전달하는 것임 */}
    </>
  );
}

export default App;
