import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import RecentlyRead from "./pages/RecentlyRead";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";
import { type RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "recently-read",
        element: <RecentlyRead />,
      },
    ],
  },
];

export default routes;
