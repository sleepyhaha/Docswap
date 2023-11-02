import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div>
      <Link to={"/Success"}>
        <img
          src="../../public/Screenshot 2023-11-02 164053.png"
          alt="payment form"
          className="ml-40 mt-40"
        />
      </Link>
    </div>
  );
}
