import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="p-4 bg-indigo-950 fixed bottom-0 w-full">
      <FontAwesomeIcon
        icon={faSquareGithub}
        size="4x"
        style={{ color: "#383838" }}
      />
    </footer>
  );
}
