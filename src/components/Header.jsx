import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if (user) {        
        const {uid, email, displayName} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-black max-w-full px-5 py-3 absolute left-0 top-0 z-50 flex justify-between items-center">
      <figure className="md:w-40 w-20">
        <img src="/assets/Netflix_Logo.png" alt="logo" />
      </figure>
      {user && (
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center mr-2.5">
            <figure className="max-w-6">
              <img
                src="/assets/user.png"
                alt={user?.displayName}
              />
            </figure>
            <span className="pl-1 text-white font-semibold">{user?.displayName?.toUpperCase()}</span>
          </div>

          <button
            className="text-white font-medium text-sm cursor-pointer bg-red-500 p-2 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
