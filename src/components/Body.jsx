import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login"
import MovieDetailPage from "./MovieDetailPage";

const Body = () => {  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:movieId",
      element: <MovieDetailPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
