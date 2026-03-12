import { createBrowserRouter } from "react-router-dom";
import SigninPage from "./pages/signin/page";
import SignupPage from "./pages/signup/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>hello</>
  },
  {
    path: "/sign-in",
    element: <SigninPage />
  },
  {
    path: "/sign-up",
    element: <SignupPage />
  },
]);

export default router;