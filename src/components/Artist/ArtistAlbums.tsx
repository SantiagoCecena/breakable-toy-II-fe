import { Link } from "react-router";
import { Card, CardContent } from "../ui/card";

function ArtistAlbums({ albums }: { albums: any[] }) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Albums</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {albums.slice(0, 10).map(album => (
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
                ))}
            </div>
        </section>
    )
}

export default ArtistAlbums;