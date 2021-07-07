import React, { useRef, useState, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중..");
  return users.filter((user) => user.active).length;
}

// 복습 :
// 배열안에 있는 값을 추가하거나 제거, 수정해야할 때
// onCreate에서는 spread operator / concat function을 사용
// onRemove에서는 filter function을 사용
// 특정값만 업데이트 할 때에는, onToggle에서는, map함수를 사용하면 되겠다.
function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };
  // 위와 같이 매번 함수를 선언한다고 해서 속도가 느려지지는 않지만, 아래 UserList같은 컴포넌트들의 props가 변경 되지 않는다면 리렌더링 - virture dom이 하는 리렌더링 조차 하지 않아도 되는데. 그래서 이전에 만든 함수를 재사용할수있게끔. 하는게 ==> useCallback
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs] // useCallback을 쓰려면 우선 onChange함수안에 있는 애들을 감싸주고, 내부에서 애들이 의존하고 있는 값들이 있나 봐야함. 보면 inputs가 useState를 통해서 관리가 되어지고 있지. 그래서 inputs를 두번째 파라미터인 deps 배열에 넣어주면 된다.
    // 그러면 onChange함수는 inputs의 값이 바뀔때만 함수가 새롭게 , 그렇지 않다면 기존에 있는 함수를 재사용하게 되는것.
  );

  // 이렇게 useState로 감싸주면, 즉 바깥으로 빼주면 밖에서도 이걸 쓸수 있게 해주는것임.. (? 근데 원래도 썼던게..아닌가..)
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "heemong",
      email: "heemong9@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "devyez",
      email: "dev.yezlee@gmail.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  // 위에 아이디가 3까지 있으니까 4로 해주고
  // 담에 또 새로운 아이디, nextId가 생기는거를 위해서 함수를 만들거

  const onCreate = useCallback(() => {
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
  }, [username, email, users]); // 만약 여기 dependency에 넣어주지 않으면 함수에서 해당 상태들을 참조할때 제일 최신버전을 참조하는게 아니고 처음 생성할때의 상태를 참조하게 된다.

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
      //설명 : 파라미터로 id가 3인애가 들어왔어, users.filter해서 user를 파라미터로 받아서, user.id가 파라미터로 들어온 아이디3이랑 일치한지 보는거야. 그럼 아이디 1,2는 3이 아니니까 트루가 되서 그 두개만 들어있는 배열이 새로 만들어짐. 그 배열을 setUsers에 담으면 users배열이 새롭게 없데이트가 되는거지.
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );
  // 이렇게 배열안에 있는 원소를 업데이트 할 때는 map함수를 사용해서 구현할 수 있다
  // 또 특정 객체를 업데이트 할 때도, { ...user, active: !user.active } 이렇게 기존의 유저를 수정하는게 아니라 새로운 객체를 만드는거!!! 만들어서 원래 기존에 user가 갖고있던 값을 넣어주고  {...user}, 나서 특정 값을 덮어 씌워 주는 형태로 active: !user.active - 이렇게!
  // 이게 불변성을 유지하는 거야.

  const count = useMemo(() => countActiveUsers(users), [users]);
  // useEffect랑 같이 두번째 파라미터에는 deps라는 배열을 넣어줌.
  // [] 안에 들어오는 애가 실행될때 useMemo를 사용하겠다. 라는 것이 useMemo의 특성

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      {/* 이렇게 하면 위에 적은 배열 users를 - useState()로 추출함(users 도 useState 를 사용하여 컴포넌트의 상태로서 관리해주세요.) - UserList 컴포넌트에 전달하는 것임 */}
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
