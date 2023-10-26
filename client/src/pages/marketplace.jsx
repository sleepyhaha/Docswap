import { Link } from "react-router-dom";

export default function Marketplace() {
  return (
    <div className="h-3/4 w-full flex flex-col items-center">
      <section className="flex justify-center w-full mb-16">
        <h1>Marketplace</h1>
      </section>
      <div className="h-full columns-3 w-4/5 flex">
        <section className="w-72 h-96 bg-stone-300">
          <title>Seller</title>
          <div>
            <img src="/" alt="seller profile picture" />
          </div>
          <Link to="/profile">
            <button>View Profile</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
