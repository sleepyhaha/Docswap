import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  useQuery,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/header";
import Footer from "./components/footer";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import UserContext from "./util/usercontext";
import { GET_ME } from "./util/queries";
import Particle from "./util/Particles";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { loading, error, data } = useQuery(GET_ME);

  useEffect(() => {
    if (!loading && !error && data) {
      setUser(data.me);
    }
  }, [loading, error, data]);
  console.log(data);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

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
      <UserProvider>
        <header>
          <Header />
        </header>

        <AnimatePresence>
          <Outlet key={location.pathname} />
          <Particle />
        </AnimatePresence>

        <footer>
          <Footer />
        </footer>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
