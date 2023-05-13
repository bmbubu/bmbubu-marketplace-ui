import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { Login } from "./containers/Login";
import { Register } from "./containers/Register";
import { RegistrationSuccess } from "./containers/RegistrationSuccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="registration-success" element={<RegistrationSuccess />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
