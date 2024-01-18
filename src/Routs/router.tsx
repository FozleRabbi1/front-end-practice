import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AdminLayOut from "../Components/LayOut/AdminLayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayOut></AdminLayOut>,
    children: [
      { index: true, element: <h2>this is admin layout</h2> },
      { path: "add-admin", element: <h2>this is add admin</h2> },
    ],
  },
]);

export default router;
