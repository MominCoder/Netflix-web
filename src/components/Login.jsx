import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({});

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {

    const validationResult = checkValidateData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );

    setErrors(validationResult);
  };

  const toggleSignInForm = () => {
    setErrors({})
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative ">
      <Header />
      <figure className="">
        <img
          src="/public/assets/Login_BG_large.jpg"
          alt="Login_Background"
          className="h-screen w-full"
        />
      </figure>

      <div className="bg-black/80 p-10 w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-2xl mb-3 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="text-sm my-2 outline-none p-2 bg-white"
              />

              {errors?.name && <p className="text-red-500">{errors.name}</p>}
            </>
          )}
          <input
            type="text"
            placeholder="Email address"
            ref={email}
            className="text-sm my-2 outline-none p-2 bg-white"
          />
          {errors?.email && <p className="text-red-500">{errors.email}</p>}
          <input
            type="password"
            placeholder="Password"
            ref={password}
            className="text-sm my-2 outline-none p-2 bg-white"
          />
          {errors?.password && <p className="text-red-500">{errors.password}</p>}
          <button
            className="bg-red-600 text-white text-xl p-1 mt-2"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="font-semibold text-md mt-4">
            <span className="text-white opacity-50">
              {isSignInForm ? "New to Netflix? " : "Already a user? "}
            </span>
            <span
              onClick={toggleSignInForm}
              className="text-white opacity-100 inline-block cursor-pointer"
            >
              {isSignInForm ? "Sign up now" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
