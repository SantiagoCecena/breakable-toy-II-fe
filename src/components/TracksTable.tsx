import type { IFetchedTrack } from "../types"
import { fromMsToMinuts } from "../lib/utils"
import { Clock } from "lucide-react"
import { Link } from "react-router";

function TracksTable({ tracks }: { tracks: IFetchedTrack[] }) {
    return (
        <div className="bg-[#181818] rounded-md overflow-hidden">

            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="text-gray-400 py-3 text-center">#</td>
                        <td className="text-gray-400 py-3 pl-4">Title</td>
                        <td className="text-gray-400 py-3 flex justify-center"><Clock className="w-5 h-5" /></td>
                    </tr>
                    {tracks.slice(0, 10).map((track, idx) => (
                        <tr key={track.id} className="hover:bg-[#282828] group">
                            <td className="px-4 py-3 w-12 text-gray-400 group-hover:text-white">{idx + 1}</td>
                            <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 relative rounded-md overflow-hidden">
                                        <img src={track.album.images[0].url} alt={track.album.name} className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{track.name}</p>
                                        <div className="flex items-center">
                                            <Link to={`/artist/${track.artists[0].id}`} className="hover:underline">
                                                <p className="text-sm text-gray-400 hover:text-white">{track.artists[0].name}</p>
                                            </Link>
                                            {track.explicit && (
                                                <span className="bg-gray-600 text-[10px] px-1 rounded-xs text-white/80 ml-1">E</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-gray-400 text-center">
                                <span>{fromMsToMinuts(track.duration_ms)}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TracksTable;