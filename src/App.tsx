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
import { HomeLayout } from "./components/layout/HomeLayout";
import { Home } from "./containers/Home";
import { LoginLayout } from "./components/layout/LoginLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="registration-success" element={<RegistrationSuccess />} />
      </Route>
    </Route>
  )
);
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
