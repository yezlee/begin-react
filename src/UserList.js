import React from "react";

// 하나의 파일안에 여러개의 컴포넌트가 들어가도 상관없다.

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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
        <User user={user} key={user.id} />
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
