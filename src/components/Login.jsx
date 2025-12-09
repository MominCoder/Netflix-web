import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = ()=> {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className="relative ">
      <Header />
      <figure className="">
        <img src="/public/assets/Login_BG_large.jpg" alt="Login_Background" className="h-screen w-full" />
      </figure>

      <div className="bg-black/80 p-10 w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form className="flex flex-col">
          <h1 className="text-2xl mb-3 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {
            !isSignInForm && 
            <input
            type="text"
            placeholder="Name"
            className="text-sm my-2 outline-none p-2 bg-white"
          />
          }
          <input
            type="text"
            placeholder="Email address"
            className="text-sm my-2 outline-none p-2 bg-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-sm my-2 outline-none p-2 bg-white"
          />
          <button className="bg-red-600 text-white text-xl p-1 mt-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="font-semibold text-md mt-4">
            <span className="text-white opacity-50">
            {isSignInForm ? "New to Netflix? " : "Already a user? "}
            </span>
            <span onClick={toggleSignInForm} className="text-white opacity-100 inline-block cursor-pointer">
              {isSignInForm ? "Sign up now" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
