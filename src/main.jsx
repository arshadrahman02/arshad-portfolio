import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/Main/Main";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Blogs from "./component/Blogs/Blogs";
import Contact from "./component/Contact/Contact";
import img from "../src/assets/BG/herobg.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-info">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
