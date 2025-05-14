import { createBrowserRouter } from "react-router";
import App, { AppLoader } from "../App";
import Login from "../pages/Login";
import MainDashboard, { getTopTenArtistLoader } from "../pages/MainDashboard";
import Artist, { getArtistLoader } from "../pages/Artist";
import Album, { getAlbumLoader } from "../pages/Album";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <App />,
        loader: AppLoader,
        children: [
            { index: true, element: <MainDashboard />, loader: getTopTenArtistLoader },
            { path: "artist/:id", element: <Artist />, loader: getArtistLoader },
            { path: "album/:id", element: <Album />, loader: getAlbumLoader }
        ]
    }
])