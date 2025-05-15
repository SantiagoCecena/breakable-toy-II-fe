import { Link } from "react-router";
import { Card, CardContent } from "../ui/card";

function AlbumCard({ album }: { album: any }) {
    return (
        <Link to={`/album/${album.id}`} key={album.id}>
            <Card className="bg-spotify-gray text-white border-none hover:bg-[#282828] transition-colors">
                <CardContent className="px-4">
                    <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                        <img src={album.images[1].url} alt={album.name} className="w-full object-cover hover:scale-105 transition-all" />
                    </div>
                    <div>
                        <h3 className="font-semibold truncate">{album.name}</h3>
                        <p className="text-sm text-gray-400">
                            {album.release_date.split("-")[0]} · {album.total_tracks} songs
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default AlbumCard;