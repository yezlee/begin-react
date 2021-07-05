import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
  const users = [
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
  ];

  const nextId = useRef(4);
  // 위에 아이디가 3까지 있으니까 4로 해주고
  // 담에 또 새로운 아이디, nextId가 생기는거를 위해서 함수를 만들거
  const onCreate = () => {
    console.log(nextId.current); //4
    //새로 만들때마다 현재 아이디가 뭔지 알고싶음 위와같은 코드를 작성하고
    nextId.current += 1;
    //이렇게 하면 onCreate() 함수가 실행될때마다 현재 아이디한테 1을 더해주니까.

    //nextId를 useRef로 관리하는 이유는 새로운 값이 입력될때마다 업데이트 되서 리렌더링 할 필요가 없어서 useRef를 쓴다.
    //useState로 써도 상관은 없는데, 굳이 왜? 이런거지. 리렌더링 할 필요가 없는데.

    // 정리 : useRef는 특정 돔을 선택할 떄도 ref속성을? 이용해서 사용할 수도 있지만,
    // 컴포넌트가 리렌더링돼도 기억하고 싶은 값이 있을때도 useRef를 쓴다.
  };

  return <UserList users={users} />;
  // 이렇게 하면 위에 적은 users를 UserList 컴포넌트에 전달하는 것임
}

export default App;
