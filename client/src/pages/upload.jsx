import { Widget } from "@uploadcare/react-widget";

export default function Upload() {
  return (
    <div className="h-2/3">
      <section className="flex justify-center w-full">
        <h1>Upload</h1>
      </section>
      <div className="flex flex-col justify-center items-center relative left-40">
        <form className="w-1/2 flex mt-56 items-center">
          <p className="mx-7 text-2xl">Title: </p>
          <input
            type="string"
            placeholder={"Enter your title here"}
            className="ml-8 py-1 px-9 text-center"
          />
        </form>
        <form className="w-1/2 flex mt-5 items-center">
          <p className="mx-7 text-2xl">Description:</p>
          <input
            type="string"
            placeholder={"Enter your description here"}
            className="ml-10 py-1 px-9 text-center"
          />
        </form>
        <form className="w-1/2 flex mt-5 items-center">
          <p className="mr-12 text-2xl">Price:</p>
          <input
            type="integer"
            placeholder={"Enter your price here"}
            className="py-1 px-9 ml-1.5 text-center"
          />
        </form>
        <form>
          <p> Preview: </p>
          <Widget publicKey="d8ef5a21f4ceb10dd109" id="file" />
        </form>
        <form>
          <label htmlFor="file"> Document: </label>
          <Widget publicKey="d8ef5a21f4ceb10dd109" id="file" />
        </form>
      </div>
    </div>
  );
}
