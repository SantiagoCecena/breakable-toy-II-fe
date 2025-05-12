import { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import { Outlet } from "react-router"

function App() {

	// This effect is used to remove the hash from the URL after authentication
	useEffect(() => {
		if (window.location.hash === "#_=_") {
			window.history.replaceState(null, "", window.location.pathname)
		}
	}, [])

	return (
		<div className="flex h-screen bg-spotify-gray text-white">
			<Sidebar />
			<main className="flex-1 flex flex-col overflow-hidden">
				<Topbar />
				<Outlet />
			</main>
		</div>
	)
}

export default App
