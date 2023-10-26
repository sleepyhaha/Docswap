import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className=" h-2/3">
      <section className="flex justify-center w-full">
        <h1>My Profile</h1>
      </section>
      <div className="mt-28 columns-2 h-full mx-10">
        <section className="h-full mx-5">
          <img src="*" alt="profile picture" />
          <button>Upload profile picture</button>
        </section>
        <aside className="h-full mx-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            blanditiis tenetur accusantium. Minus cum iste perspiciatis nobis
            laudantium qui deleniti voluptate illo. Itaque, temporibus. Nulla
            quidem atque quibusdam accusamus at.
          </p>
          <Link to="/library">
            <button className="object-bottom relative">View Library</button>
          </Link>
          <Link to="/purchases">
            <button>View purchases</button>
          </Link>
        </aside>
      </div>
    </div>
  );
}
