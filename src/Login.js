import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user";
function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => dispatch(login({ name, age, email }))}>
        login
      </button>

      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
}

export default Login;
