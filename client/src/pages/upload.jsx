import { Widget } from "@uploadcare/react-widget";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD } from "../util/mutations";
require("dotenv").config();

export default function Upload() {
  const [upload] = useMutation(UPLOAD);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await upload({
      variables: {
        title: formState.title,
        description: formState.description,
        price: formState.price,
        preview: formState.preview.response.uuid,
        location: formState.location.response.uuid,
      },
    });

    return mutationResponse;
  };

  return (
    <div className="h-2/3">
      <section className="flex justify-center w-full">
        <h1>Upload</h1>
      </section>
      <div className="flex flex-col justify-end items-center relative left-40">
        <form className="w-1/2 flex mt-56 items-center">
          <p className="mx-7 text-2xl">Title: </p>
          <input
            type="string"
            name="title"
            id="title"
            placeholder={"Enter your title here"}
            className="ml-8 py-1 px-9 text-center"
          />
        </form>
        <form className="w-1/2 flex mt-5 items-center">
          <p className="mx-7 text-2xl">Description:</p>
          <input
            type="string"
            name="description"
            id="description"
            placeholder={"Enter your description here"}
            className="ml-10 py-1 px-9 text-center"
          />
        </form>
        <form className="w-1/2 flex mt-5 items-center">
          <p className="mr-12 text-2xl">Price:</p>
          <input
            type="integer"
            name="price"
            id="price"
            placeholder={"Enter your price here"}
            className="py-1 px-9 ml-1.5 text-center"
          />
        </form>
        <form>
          <p className="float-left"> Preview: </p>
          <Widget publicKey={process.env.UC_KEY} name="preview" id="preview" />
        </form>
        <form>
          <label htmlFor="file"> Document: </label>
          <Widget
            publicKey={process.env.UC_KEY}
            name="location"
            id="location"
          />
        </form>
        <button onSubmit={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
