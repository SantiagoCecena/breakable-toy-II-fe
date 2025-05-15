import { createBrowserRouter, useRouteError } from "react-router";
import App, { AppLoader } from "../App";
import Login from "../pages/Login";
import MainDashboard, { getTopTenArtistLoader } from "../pages/MainDashboard";
import Artist, { getArtistLoader } from "../pages/Artist";
import Album, { getAlbumLoader } from "../pages/Album";
import Search, { searchLoader } from "../pages/Search";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <App />,
        errorElement: <LayoutErrorWrapper />,
        loader: AppLoader,
        children: [
            { index: true, element: <MainDashboard />, loader: getTopTenArtistLoader },
            { path: "artist/:id", element: <Artist />, loader: getArtistLoader },
            { path: "album/:id", element: <Album />, loader: getAlbumLoader },
            { path: "search", element: <Search />, loader: searchLoader }
        ]
    }
])

function LayoutErrorWrapper() {

    const error = useRouteError();

    return <App error={error} />
}