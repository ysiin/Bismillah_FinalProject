import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router";
import Home from "./page/home.tsx";
import Header from "./components/header/index.tsx";
import BorrowBook from "./page/borrow-book.tsx";
import Login from "./page/login.tsx";
import Register from "./page/register.tsx";
import Category from "./page/category.tsx";
import ListBook from "./page/list-booking.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import DetailBookPage from "./page/details-book.tsx";
import DashboardAdmin from "./page/dashboard-admin/index.tsx";
import { AuthProvider, useAuth } from "./contexts/AuthContext.tsx";

// Protected Route for Admin
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

// Protected Route for Authenticated Users (anggota)
const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: (
          <AuthenticatedRoute>
            <Home />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/borrow-book",
        element: (
          <AuthenticatedRoute>
            <BorrowBook />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/category",
        element: (
          <AuthenticatedRoute>
            <Category />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/list-booking",
        element: (
          <AuthenticatedRoute>
            <ListBook />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/details/book/:id",
        element: (
          <AuthenticatedRoute>
            <DetailBookPage />
          </AuthenticatedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <MainLayout>
          <DashboardAdmin />
        </MainLayout>
      </AdminRoute>
    ),
  },
]);
function MainLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-row max-h-screen">
      <header className="shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)] h-screen w-60">
        <Header />
      </header>
      <main className="flex-1 p-4 overflow-y-auto">
        {children || <Outlet />}
        <Toaster richColors position="top-center" />
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
