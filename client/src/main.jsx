import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/home.jsx";
import Error from "./pages/error.jsx";
import Marketplace from "./pages/marketplace.jsx";
import Profile from "./pages/profile.jsx";
import SignInForm from "./components/sign-in-form";
import SignUpForm from "./components/sign-up-form/index.jsx";
import Library from "./pages/library.jsx";
import Document from "./pages/document.jsx";
import Payment from "./pages/payment-page.jsx";
import Upload from "./pages/upload.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signin",
        element: <SignInForm />,
      },
      {
        path: "/signup",
        element: <SignUpForm />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/document",
        element: <Document />,
      },
      {
        path: "/purchases",
        element: <Payment />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
