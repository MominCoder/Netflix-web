import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
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
