import { Widget } from "@uploadcare/react-widget";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import UserContext from "../util/usercontext";
import { UPLOAD } from "../util/mutations";
import { useNavigate } from "react-router-dom";
const apiKey = import.meta.env.VITE_UC_KEY;

export default function Upload() {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: "",
    preview: "",
    location: "",
  });

  const [upload] = useMutation(UPLOAD);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await upload({
        variables: {
          title: formState.title,
          author: user._id,
          description: formState.description,
          price: parseInt(formState.price),
          preview: formState.preview,
          location: formState.location,
        },
      });
      console.log(response);
      navigate("/success");
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

  const handlePreviewChange = (data) => {
    setFormState({
      ...formState,
      preview: data.uuid,
    });
    console.log(data.uuid);
  };

  const handleLocationChange = (data) => {
    setFormState({
      ...formState,
      location: data.uuid,
    });
  };

  return (
    <div className="h-2/3">
      <section className="flex justify-center w-full">
        <h1>Upload</h1>
      </section>
      <form
        className="flex flex-col justify-end items-center relative left-40"
        onSubmit={handleSubmit}
      >
        <div className="w-1/2 flex ml-80 mt-56 ">
          <p className="mx-7 text-2xl">Title: </p>
          <input
            type="string"
            name="title"
            id="title"
            placeholder={"Enter your title"}
            className="ml-8 py-1 px-9 text-center"
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 flex ml-80 mt-5 mr-14 ">
          <p className=" text-2xl">Description:</p>
          <input
            type="string"
            name="description"
            id="description"
            placeholder={"Enter your description"}
            className="ml-10 py-1 px-9 text-center"
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 flex ml-96 mt-5">
          <p className="mr-12 text-2xl">Price:</p>
          <input
            type="integer"
            name="price"
            id="price"
            placeholder={"Enter your price"}
            className="py-1 px-9 ml-1.5 text-center"
            onChange={handleChange}
          />
        </div>
        <div className="mr-96">
          <label htmlFor="preview" className="float-left mt-2 mr-2">
            Preview:
          </label>
          <Widget
            publicKey={apiKey}
            onChange={handlePreviewChange}
            name="preview"
            id="preview"
          />
        </div>
        <div className="mr-96">
          <label htmlFor="file"> Document: </label>
          <Widget
            publicKey={apiKey}
            onChange={handleLocationChange}
            name="location"
            id="location"
          />
        </div>
        <button type="submit" className="bg-indigo-900 mr-96">
          Submit
        </button>
      </form>
    </div>
  );
}
