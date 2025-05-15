import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import { Outlet, redirect, type LoaderFunctionArgs } from "react-router"
import ErrorContent from "./components/ErrorContent"

function App({ error }: { error?: unknown }) {

	return (
		<div className="flex h-screen bg-spotify-gray text-white">
			<Sidebar />
			<main className="flex-1 flex flex-col overflow-hidden">
				<Topbar />
				{
					error
						? <ErrorContent error={error} />
						: <Outlet />
				}
			</main>
		</div>
	)
}

export function AppLoader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const accessToken = url.searchParams.get("access_token");

	if (accessToken) {
		localStorage.setItem("access_token", accessToken);
		const cleanUrl = url.pathname;
		return redirect(cleanUrl);
	} else {
		const token = localStorage.getItem("access_token");
		if (!token) {
			return redirect("/login");
		}
		return null;
	}
}

export default App
