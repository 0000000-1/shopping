import Dashboard from "./components/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter } from "react-router-dom";
import Loggin from "./pages/login/Loggin";
import CartTab from "./components/cartTab/CartTab";
import Detail from "./pages/details/Detail";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <><Loggin /></> },
    { path: "/", element: <><Dashboard /></> },
    { path: "/cartTab", element: <CartTab /> },
    { path: "/:slug", element: <Detail /> }
  ])
  return (
    <>
      <h1>
        <RouterProvider router={router}>
        </RouterProvider>
      </h1>
    </>
  );
}

export default App;
