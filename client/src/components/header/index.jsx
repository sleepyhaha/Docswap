import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className=" bg-indigo-950 p-5">
      <h1>DocSwap</h1>
      <Link to="/signup" className="relative float-right bottom-12">
        <button>Sign Up</button>
      </Link>
      <Link to="/signin" className="relative float-right bottom-12 right-5">
        <button>Sign In</button>
      </Link>
    </nav>
  );
}
