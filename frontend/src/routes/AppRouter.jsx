import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "../layout";
import { Error, Home, Login, Register } from "../pages";
import ProtectedRoute from "./ProtectedRoute";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />} element={<MainLayout />}>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Protected Route */}
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
