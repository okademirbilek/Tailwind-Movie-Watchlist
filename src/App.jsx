import "./index.css";

import { SnackbarProvider } from "notistack";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import {
  Home,
  WatchList,
  MovieDetails,
  NotFound,
  SignUp,
  Login,
  Dashboard,
  ForgotPassword,
  UpdateProfile,
  Root,
  PersonDetail,
} from "./pages/index";

import PaginatedItems from "./components/PaginatedItems";
import PopularMovies from "./components/PopularMovies";
import AuthRequired from "./components/AuthRequired";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <PopularMovies />,
          },
          {
            path: "/search/:movie/:page",
            element: <PaginatedItems />,
          },
        ],
      },
      {
        path: "/details/:id",
        element: <MovieDetails />,
      },
      {
        path: "/person/details/:personId",
        element: <PersonDetail />,
      },
      {
        element: <AuthRequired />,
        children: [
          {
            path: "/watchList",
            element: <WatchList />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "update-profile",
            element: <UpdateProfile />,
          },
        ],
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <AuthProvider>
      <div className="App max-h-screen">
        <RouterProvider router={router} />
        <SnackbarProvider autoHideDuration={1000} />
      </div>
    </AuthProvider>
  );
}

export default App;
