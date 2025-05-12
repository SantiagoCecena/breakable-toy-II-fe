import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import MainDashboard from "../pages/MainDashboard";
import Artist from "../pages/Artist";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <MainDashboard /> },
            { path: "artist/:id", element: <Artist /> },
        ]
    }
])