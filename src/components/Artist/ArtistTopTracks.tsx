import { Clock } from "lucide-react";
import { fromMsToMinuts } from "../../lib/utils";

function ArtistTopTracks({ topTracks }: { topTracks: any[] }) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular tracks</h2>
            <div className="bg-[#181818] rounded-md overflow-hidden">
                <table className="w-full">
                    <tbody>
                        <tr>
                            <td className="text-gray-400 py-3 text-center">#</td>
                            <td className="text-gray-400 py-3 pl-4">Title</td>
                            <td className="text-gray-400 py-3 flex justify-center"><Clock className="w-5 h-5" /></td>
                        </tr>
                        {topTracks.slice(0, 5).map((track, idx) => (
                            <tr key={track.id} className="hover:bg-[#282828] group">
                                <td className="px-4 py-3 w-12 text-gray-400 group-hover:text-white">{idx + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 relative rounded-md overflow-hidden">
                                            <img src={track.album.images[0].url} alt={track.album.name} className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{track.name}</p>
                                            {track.explicit && (
                                                <span className="inline-block bg-gray-600 text-[10px] px-1 rounded-xs text-white/80 mr-1">E</span>
                                            )}
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
        </section>
    )
}

export default ArtistTopTracks;