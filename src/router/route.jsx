import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import AboutMe from "../pages/aboutme/AboutMe";
import Home from "../pages/home/Home";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import Medias from "../pages/medias/Medias";
import PostContentDetails from "../components/PostContentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/medias",
        element: <Medias />,
      },
      {
        path: "/media/:id",
        element: <PostContentDetails />,
      },
      {
        path: "/profile",
        element: <AboutMe />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
