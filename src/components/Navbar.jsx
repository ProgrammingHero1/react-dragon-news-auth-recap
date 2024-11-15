import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <Link to="/dev">Dev Information</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          {user && user?.email ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
