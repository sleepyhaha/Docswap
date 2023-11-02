import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../util/queries";
import UserContext from "../util/usercontext";
import { useContext } from "react";

export default function Profile() {
  const user = useContext(UserContext);

  if (!user) {
    <p>loading</p>;
  }

  const picURL = `ucarecdn.com/{user.profilePic}/`;

  return (
    <div className=" h-2/3">
      <section className="flex justify-center w-full">
        <h1>{user.name}'s Profile</h1>
      </section>
      <div className="mt-28 columns-2 h-full mx-10">
        <section className="h-full mx-5 bg-slate-400">
          <img src={picURL} alt="profile picture" />
        </section>
        <aside className="h-full mx-5">
          <p>{user.description}</p>
          <Link to="/library">
            <button className="object-bottom relative">View Library</button>
          </Link>
          <Link to="/purchases">
            <button>View purchases</button>
          </Link>
          <Link to="/upload">
            <button>Upload</button>
          </Link>
        </aside>
      </div>
    </div>
  );
}
