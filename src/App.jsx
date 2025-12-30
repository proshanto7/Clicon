import Home from "./pages/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Account from "./pages/Account";
import Singup from "./pages/Singup";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/singIn",
      element: <Account />,
    },
    {
      path: "/singup",
      element: <Singup/>,
    },
  ]);

  return (
    <main className="font-publicSans">
      <RouterProvider router={router} />,
    </main>
  );
}

export default App;
