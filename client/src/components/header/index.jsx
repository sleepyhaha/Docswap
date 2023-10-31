import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../util/UserContext";
import { signOut, signedIn } from "../../util/auth";

export default function Header() {
  const user = useContext(UserContext);
  return (
    <nav className=" bg-indigo-950 p-5">
      <Link to="/">
        <h1>DocSwap</h1>
      </Link>
      {signedIn() ? (
        <>
          <Link
            to="/profile"
            className="relative float-right bottom-12 right-5"
          >
            Profile
          </Link>
          <button
            onClick={signOut}
            className="relative float-right bottom-12 right-5"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/signup" className="relative float-right bottom-12">
            <button>Sign Up</button>
          </Link>
          <Link to="/signin" className="relative float-right bottom-12 right-5">
            <button>Sign In</button>
          </Link>
        </>
      )}
    </nav>
  );
}
