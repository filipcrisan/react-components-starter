import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RepoDetails from "./components/repo-details";
import "./reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:owner/:name",
    element: <RepoDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
