import { Link } from "react-router-dom";

export default function MyPurchases() {
  return (
    <div className="h-full">
      <section className="flex justify-center w-full">
        <h1>My Purchases</h1>
      </section>
      <div className=" w-4/5 m-auto flex flex-wrap justify-evenly">
        <section className="w-72 h-96 bg-stone-600 mt-5">
          <title>Doc title</title>
          <div className="columns-2">
            <img src="/" alt="seller profile picture" />
            <p>description here</p>
            <p>price here</p>
          </div>
          <Link to="/document">
            <button>View</button>
          </Link>
        </section>
        <section className="w-72 h-96 bg-stone-600 mt-5">
          <title>Doc title</title>
          <div className="columns-2">
            <img src="/" alt="seller profile picture" />
            <p>description here</p>
            <p>price here</p>
          </div>
          <Link to="/document">
            <button>View</button>
          </Link>
        </section>
        <section className="w-72 h-96 bg-stone-600 mt-5">
          <title>Doc title</title>
          <div className="columns-2">
            <img src="/" alt="seller profile picture" />
            <p>description here</p>
            <p>price here</p>
          </div>
          <Link to="/document">
            <button>View</button>
          </Link>
        </section>
        <section className="w-72 h-96 bg-stone-600 mt-5">
          <title>Doc title</title>
          <div className="columns-2">
            <img src="/" alt="seller profile picture" />
            <p>description here</p>
            <p>price here</p>
          </div>
          <Link to="/document">
            <button>View</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
