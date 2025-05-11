import type { Artist } from "../types";
import { Card, CardContent } from "./ui/card";
import placeholderImg from "../assets/placeholder.png"
import { Link } from "react-router";

function ArtistCard({ artist }: { artist: Artist }) {
    return (
        <Link to={`/artist/${artist.id}`}>
            <Card className="bg-spotify-gray text-white border-none hover:bg-[#282828] transition-colors">
                <CardContent className="px-4">
                    <div className="aspect-square relative mb-4 rounded-md overflow-hidden">
                        <img src={artist.image || placeholderImg} alt={artist.name} className="object-cover hover:scale-105 transition-all" />
                    </div>
                    <div>
                        <h3 className="font-semibold truncate">{artist.name}</h3>
                        <p className="text-sm text-gray-400">Artist</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ArtistCard;