import { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

function App() {

	useEffect(() => {
		if (window.location.hash === "#_=_") {
			window.history.replaceState(null, "", window.location.pathname)
		}
	}, [])

	return (
		<div className="flex h-screen bg-spotify-gray text-white">
			<Sidebar />
			<main className="flex-1 overflow-hidden">
				<Topbar />
			</main>
		</div>
	)
}

export default App
