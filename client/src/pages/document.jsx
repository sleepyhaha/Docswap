import { Link } from "react-router-dom";

export default function Document() {
  return (
    <div className="h-full flex flex-row flex-wrap w-full m-auto ">
      <section className="w-full relativeW">
        <h1>Document title</h1>
      </section>
      <div className="mt-28 w-2/3 h-full m-auto">
        <section className="h-1/3 w-1/3 bg-slate-400 m-auto ">
          <img src="*" alt="document title" />
        </section>
        <aside className="h-full mx-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            blanditiis tenetur accusantium. Minus cum iste perspiciatis nobis
            laudantium qui deleniti voluptate illo. Itaque, temporibus. Nulla
            quidem atque quibusdam accusamus at.
          </p>
          <br />
          <p>$$$$</p>
          <br />
          <Link to="/payment">
            <button>Purchase</button>
          </Link>
        </aside>
      </div>
    </div>
  );
}
