import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



 import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import JavaScript from "./pages/javaScript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>sorry ! </h1>,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <JavaScript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
