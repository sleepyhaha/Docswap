import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/header";
import Footer from "./components/footer";
import { AnimatePresence } from "framer-motion";
import "./App.css";

const http = createHttpLink({
  uri: "/graphql",
});

const auth = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: auth.concat(http),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <header>
        <Header />
      </header>
      <AnimatePresence>
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <footer>
        <Footer />
      </footer>
    </ApolloProvider>
  );
}

export default App;
