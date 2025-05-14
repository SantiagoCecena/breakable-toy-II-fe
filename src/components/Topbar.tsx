import { LogOut, UserIcon } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Link, useNavigate } from "react-router"

function Topbar() {

    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem("access_token");
        navigate("/login");
    }
    return (
        <div className="h-20 bg-spotify-gray border-b border-[#282828] flex items-center justify-between px-6">
            <div className="flex items-center gap-2 ml-auto">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full bg-black/50">
                            <UserIcon className="w-5 h-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-[#282828] border-[#3e3e3e] text-white">
                        <DropdownMenuItem className="focus:bg-[#3f3f3f] focus:text-white">
                            <Button variant="default" className="flex items-center gap-2" onClick={handleLogout}>
                                <LogOut className="text-white" />
                                Logout
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div >
    )
}

export default Topbar