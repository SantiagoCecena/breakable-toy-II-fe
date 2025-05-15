import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router";

function SearchSection() {

    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const { search } = Object.fromEntries(formData.entries());
        navigate(`/search?q=${search}`);
    }

    return (
        <section className="mb-6 mt-10">
            <form onSubmit={handleSubmit}>
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <Input
                        name="search"
                        type="search"
                        placeholder="Search for artists, albums, tracks, or playlists..."
                        className="pl-10 py-6 bg-[#242424] border-none text-white placeholder:text-gray-400 focus-visible:ring-[#1db954] focus-visible:ring-offset-0"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <Button size="sm" className="bg-spotify-green hover:bg-[#1ed760] text-black font-medium cursor-pointer">
                            Search
                        </Button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default SearchSection;