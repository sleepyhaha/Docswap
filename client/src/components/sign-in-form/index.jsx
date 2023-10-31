import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNIN } from "../../util/mutations";
import { signIn } from "../../util/auth";

export default function SignInForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [logIn] = useMutation(SIGNIN);

  const handleSubmit = async (event) => {
    event.preventdefault();
    try {
      const response = await logIn({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      const token = response.data.signIn.token;
      signIn(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form
      className="flex flex-col justify-center items-center relative left-40"
      onSubmit={handleSubmit}
    >
      <div className="w-1/2 flex mt-56 items-center">
        <p className="mx-7 text-2xl">Email:</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={"Enter your email here"}
          className="ml-10 py-1 px-9 text-center"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 flex mt-5 items-center">
        <p className="mr-12 text-2xl">Password:</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder={"Enter your password here"}
          className="py-1 px-9 ml-1.5 text-center"
          onChange={handleChange}
        />
      </div>
      <Link to="/marketplace">
        <button className="mt-5"> Submit</button>
      </Link>
    </form>
  );
}
