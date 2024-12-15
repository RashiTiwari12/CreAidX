import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../LoginForm/Login";
import Register from "../LoginForm/Register";
import ExpertForm from "../ExpertForm/ExpertForm";
import User from "../user/User";
import ExpertsList from "../ExpertsList/ExpertsList";
// import Experts from "../Experts/Experts";
// import ExpertForm from "../ExpertForm/ExpertForm";
// import ChatPage from "../chat/ChatPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/expertform",
      element: <ExpertForm />,
    },
    {
      path: "/experts",
      element: <ExpertsList />,
    },
    {
      path: "/user",
      element: <User />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
