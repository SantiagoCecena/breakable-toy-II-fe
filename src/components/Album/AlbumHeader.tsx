import { Link, useLoaderData, useNavigate } from "react-router"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"
import { fromMsToMinuts } from "../../lib/utils";
import type { IAlbum } from "../../types";

function AlbumHeader() {


    const navigate = useNavigate();
    const album = useLoaderData<IAlbum>();

    function goBack() {
        navigate(-1);
    }

    function albumDuration(album: IAlbum) {
        return fromMsToMinuts(album.tracks.items.reduce((acc, value) => {
            return acc + value.duration_ms
        }, 0))
    }

    return (
        <section className="bg-gradient-to-b from-[#1a1a1a] to-[#121212] p-6">

            <Button variant="ghost" size="sm" className="mb-4" onClick={goBack}>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back
            </Button>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 shadow-2xl">
                        <img src={album.image} alt={album.name} className="object-cover" />
                    </div>
                </div>
                <div className="flx flex-col justify-end">
                    <div className="text-xs uppercase font-bold">Album</div>
                    <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">{album.name}</h1>
                    <div className="flex items-center text-sm text-gray-300">
                        <div className="w-6 h-6 relative rounded-full overflow-hidden mr-2">
                            <img src={album.image} alt={album.artists[0].name} />
                        </div>
                        <span className="font-semibold">
                            <Link to={`/artist/${album.artists[0].id}`}>
                                {album.artists[0].name}
                            </Link>
                        </span>
                        <span className="mx-1">·</span>
                        <span>{album.release_date.split("-")[0]}</span>
                        <span className="mx-1">·</span>
                        <span>{album.total_tracks} songs,</span>
                        <span className="ml-1">{albumDuration(album)} minutes</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AlbumHeader