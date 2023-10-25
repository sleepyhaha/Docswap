import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { AnimatePresence } from "framer-motion";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <AnimatePresence>
        <Outlet location={location} key={location.pathname} />
      </AnimatePresence>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
