import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../util/mutations";
import { login } from "../../util/auth";

export default function SignUpForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signUp] = useMutation(SIGNUP);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signUp({
      variables: {
        name: formState.name,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = response.data.signUp.token;
    login(token);
    console.log(response);
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
        <p className="mx-7 text-2xl">Name: </p>
        <input
          type="string"
          placeholder={"Enter your name here"}
          name="name"
          id="name"
          className="ml-8 py-1 px-9 text-center"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 flex mt-5 items-center">
        <p className="mx-7 text-2xl">Email:</p>
        <input
          type="email"
          placeholder={"Enter your email here"}
          name="email"
          id="email"
          className="ml-10 py-1 px-9 text-center"
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 flex mt-5 items-center">
        <p className="mr-12 text-2xl">Password:</p>
        <input
          type="password"
          placeholder={"Enter your password here"}
          name="password"
          id="password"
          className="py-1 px-9 ml-1.5 text-center"
          onChange={handleChange}
        />
      </div>

      <button className="mt-5"> Submit</button>
    </form>
  );
}
