import { Clock, Play } from "lucide-react";
import { fromMsToMinuts } from "../../lib/utils";
import { useState } from "react";

function AlbumTracks({ tracks }: { tracks: any[] }) {
    return (
        <div className="rounded-md overflow-hidden p-6">
            <table className="w-full bg-[#181818] rounded-sm">
                <thead className="border-b border-[#282828]">
                    <tr>
                        <th className="px-4 py-2 text-left font-normal text-sm text-gray-400 w-12">#</th>
                        <th className="px-4 py-2 text-left font-normal text-sm text-gray-400">Title</th>
                        <th className="px-4 py-2 font-normal text-sm text-gray-400 w-20"><Clock className="w-4 h-4 inline" /></th>
                    </tr>
                </thead>
                <tbody>
                    {tracks.map((track, idx) => (
                        <AlbumTrackItem key={track.id} track={track} idx={idx} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function AlbumTrackItem({ track, idx }: { track: any, idx: number }) {
    const [isOver, setIsOver] = useState<boolean>(false);
    return (
        <tr className="hover:bg-[#282828] group" onMouseOver={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)}>
            <td className="px-4 py-3 text-gray-400 group-hover:text-white">
                {isOver
                    ? <Play className="w-4 h-4 text-white fill-white" />
                    : idx + 1
                }
            </td>
            <td className="px-4 py-3">
                <div className="flex items-center">
                    <div>
                        <p>{track.name}</p>
                        {track.explicit && (
                            <span className="inline-block bg-gray-600 text-[10px] px-1 rounded-xs text-white mr-1">E</span>
                        )}
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-gray-400">
                <div className="flex items-center justify-center gap-2">
                    <span>{fromMsToMinuts(track.duration_ms)}</span>
                </div>
            </td>
        </tr>
    )
}

export default AlbumTracks;