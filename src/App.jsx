// Developed by sunil habal, date:-18/03/2025

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navabar/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";
import Profile from "./components/pages/Profile";
import User from "./components/pages/User";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/user/:username",
      element: <User />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
