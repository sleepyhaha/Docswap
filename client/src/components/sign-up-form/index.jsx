import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <div className="flex flex-col justify-center items-center relative left-40">
      <form className="w-1/2 flex mt-56 items-center">
        <p className="mx-7 text-2xl">Name: </p>
        <input
          type="string"
          placeholder={"Enter your name here"}
          className="ml-8 py-1 px-9 text-center"
        />
      </form>
      <form className="w-1/2 flex mt-5 items-center">
        <p className="mx-7 text-2xl">Email:</p>
        <input
          type="email"
          placeholder={"Enter your email here"}
          className="ml-10 py-1 px-9 text-center"
        />
      </form>
      <form className="w-1/2 flex mt-5 items-center">
        <p className="mr-12 text-2xl">Password:</p>
        <input
          type="password"
          placeholder={"Enter your password here"}
          className="py-1 px-9 ml-1.5 text-center"
        />
      </form>
      <Link to="/profile">
        <button className="mt-5"> Submit</button>
      </Link>
    </div>
  );
}
