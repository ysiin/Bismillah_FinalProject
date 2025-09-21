import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./page/home.tsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/pinjam",
    Component: Home,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
