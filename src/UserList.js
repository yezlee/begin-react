import React from "react";

// 하나의 파일안에 여러개의 컴포넌트가 들어가도 상관없다.

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>{" "}
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>Delete</button>
      {/* 설명 : 온클릭에서 새로운 함수를 만드는게 헷갈릴수도 있는데, 위 버튼이 눌렀을 때, 함수를 호출할 것이다. 이 함수에서는 props로 받아온 onRemove를 id값을 파라미터로 넣어서 호출을 해 줄거다.   
      <button onClick={onRemove(id)}>Delete</button>
      이렇게 하면 안돼!! -> 이러면 렌더링 되는 순간 onRemove함수가 호출되면서 즉 렌더링 되면서 모든 userlist가 사라짐.
      우선 온클릭쪽에 새로운 함수를 하나 만들어주고 () , 해당 함수에서 onRemove에 id값을 넣어서 호출하도록 설정을 함.
      */}
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  /*
    원래 여기에 이거 있었는데 useRef사용하려고 이거 app.js로 이동
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


    */
  return (
    /*
    방법 3.
    그래서 사용하는 것이 MAP!!!! 이다.
    {배열이름.map() }
    map함수 ()안에다가 user라는 파라미터를 가져와서 <User> 컴포넌트를 사용해서 렌더링을 해준다.
    안에 키 역시 써줘야함 - 지금은 id를 쓰면되는데 만약에 키로 사용할 아이디가 없으면
    인덱스로 키를 대체해도됨. 근데 비추천. 갯수가 적을때는 괜찮지만 많으면 안돼 

    */
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>

    /*
    방법2.   
    만약에 배열이 고정되어 있으면 별로 상관없겠지만 
    내용이 계속 바뀐다면 - 늘어나거나 줄어든다면 이렇게 하면 안되겠지
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
    */
    /*
    방법 1.
    그냥 하드코딩하면 이렇게도 가능. 근데 똑같은 코드가 반복되는게 싫어서
    User컴포넌트를 하나 더 만들어줘서 그걸 사용할거야.

    <div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[2].email})</span>
      </div>
    </div>
    */
  );
}

export default UserList;

/*
useRef로 컴포넌트 안의 변수 만들기
예를 들어서 컴포넌트 내부에서 let 키워드를 사용해서 어떤 변수를 선언하다고 가정해보자, 이러면 다음에 리렌더링 할때 이 변수 값은 초기화가 된다.
만약에 계속 유지하고 싶은 어떤 값을 관리하려면 useState()를 사용해야 하는데, useState()는 상태를 바꾸게 되면 컴포넌트가 리렌더링 된다.
하지만 값을 바꿨을때 굳이 리렌더링 할 필요 없을 경우가 있다.
이 때는 useRef()를 사용한다!!!
ref를 사용해야할때 useRef()를 사용한다고 배웠는데 이처럼 꼭 어떤 특정한 돔을 선택할 때만 사용하는게 아니고,
컴포넌트가 리렌더링 될 때마다 계속 기억할 수 있는 어떤 값을 관리할 수 있는 역할도 한다.

주로 setTimeout, setInterval의 id를 가져올 때, 외부라이브러리를 사용하여 생성된 인스턴스를 담을때라던지,
Scroll 위치를 알고있어야할때 등등..

기억해야할것은
useRef()로 관리하는 값은 바뀌어도 컴포넌트가 리렌더링 되지 않는다는것을 알아두자!!

 */
