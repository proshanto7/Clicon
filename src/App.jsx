import Home from "./pages/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Account from "./pages/Account";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/singUp",
      element: <Account />,
    },
  ]);

  return (
    <main className="font-publicSans">
      <RouterProvider router={router} />,
    </main>
  );
}

export default App;
