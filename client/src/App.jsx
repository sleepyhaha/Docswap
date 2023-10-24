import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Header />
      </header>
      <Outlet location={location} key={location.pathname} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
