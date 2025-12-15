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
    onAuthStateChanged(auth, (user)=>{
      if (user) {        
        const {uid, email, displayName} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between items-center w-full pr-3">
      <figure className="w-40">
        <img src="/assets/Netflix_Logo.png" alt="logo" />
      </figure>
      {user && (
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center mr-2.5">
            <figure className="max-w-12">
              <img
                src={"/public/assets/user-profile-icon.jpg"}
                alt={user?.displayName}
              />
            </figure>
            <span>{user?.displayName?.toUpperCase()}</span>
          </div>

          <button
            className="text-white text-sm cursor-pointer bg-red-500 p-2 rounded-md"
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
