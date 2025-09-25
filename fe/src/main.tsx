import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "./page/home.tsx";
import Header from "./components/header/index.tsx";
import BorrowBook from "./page/borrow-book.tsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/borrow-book",
        Component: BorrowBook,
      },
    ],
  },
]);
function MainLayout() {
  return (
    <div className="flex flex-row max-h-screen">
      <header className="shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)] h-screen w-60">
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
