import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const validationResult = checkValidData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );

    setErrors(validationResult);

    if (
      typeof validationResult === "object" &&
      Object.keys(validationResult).length > 0
    )
      return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setErrorMessage(null);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setErrorMessage(null);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setErrors({});
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <figure className="">
        <img
          src="/assets/Login_BG_large.jpg"
          alt="Login_Background"
          className="h-screen w-full object-cover"
        />
      </figure>

      <div className="bg-black/80 p-10 w-4/5 md:w-1/2 lg:w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-2xl mb-3 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <>
              <input
                type="text"
                placeholder="Name"
                ref={name}
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
          {errors?.password && (
            <p className="text-red-500">{errors.password}</p>
          )}

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            className="bg-red-600 text-white text-xl p-1 mt-2 cursor-pointer"
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
