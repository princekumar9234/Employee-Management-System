import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const handleForm = (e) => {
    e.preventDefault();
    console.log("email is :",email, "pass is :",password);
    setEmail('');
setPassword('');
  };

  return (
    <div className="flex justify-center h-screen items-center w-screen">
      <div className="border-2  border-red-800 rounded-2xl bg-transparent">
        <h2 className="m-10 text-center text-2xl opacity-80 text-red-500 ">
          Login Now
        </h2>
        <form
          onSubmit={(e) => {
            handleForm(e);
          }}
          className="flex flex-col justify-center gap-5 m-15  items-center"
        >
          <input
          onChange={(r) =>{
            setEmail(r.target.value)
          }} value={email}
            type="text"
            placeholder="Email"
            className="px-13 border-2 border-emerald-900 outline-none  placeholder:text-gray-300 bg-transparent py-4  rounded-2xl"
          />
          <input value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            type="Password"
            placeholder="Password"
            className="px-13 border-2 py-4 border-emerald-900  bg-transparent  placeholder:text-gray-300 outline-none rounded-2xl"
          />
          <button className="px-10 border-emerald-900 border-2 text-gray-300 rounded-2xl py-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
