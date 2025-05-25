import { Button } from "@/components/ui/button";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import RedirectLink from "./pages/RedirectLink";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
