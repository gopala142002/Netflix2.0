import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logInHandler = () => {
    setIsLogIn(!isLogIn);
  };
  const getInputData=(e)=>{
    e.preventDefault();
    console.log(name,email,password);
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://www.okynemedialab.com/wp-content/uploads/2019/11/netflix-background-50-Black-1080x608.jpg"
          alt="bg-image"
        />
      </div>
      <form onSubmit={getInputData} className="flex flex-col p-12 w-3/12 my-36 mx-auto left-0 right-0 items-center justify-center absolute bg-black opacity-70 rounded-md">
        <h1 className="text-white text-3xl font-bold mb-5">
          {isLogIn ? "LogIn" : "SignUP"}
        </h1>
        <div className="flex flex-col items-center box-border">
          {!isLogIn && (
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="outline-none p-3 my-2 rounded-md"
            />
          )}
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-md"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-md"
          />
          {isLogIn ? (
            <button className="bg-red-600 p-3 w-[100%] m-3 rounded-md text-white">
              LogIn
            </button>
          ) : (
            <button className="bg-red-600 p-3 w-[90%] m-3 rounded-md text-white">
              SignUp
            </button>
          )}
          <p value={password} className="text-white">
            {isLogIn ? "New to Netflix ?" : "Already have an account ?"}{" "}
            <span
              onClick={logInHandler}
              className="text-blue-300 font-medium cursor-pointer"
            >
              {isLogIn ? "SignUp" : "LogIn"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
