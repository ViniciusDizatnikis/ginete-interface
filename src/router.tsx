import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import { HomePage } from "./pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
])