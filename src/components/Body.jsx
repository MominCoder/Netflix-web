import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MovieDetailPage from "./MovieDetailPage";
import ProtectedRoute from "./ProtectedRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
    {
      path: "/movie/:movieId",
      element: (
        <ProtectedRoute>
          <MovieDetailPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
