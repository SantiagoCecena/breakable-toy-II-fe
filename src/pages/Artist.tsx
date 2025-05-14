import { ScrollArea } from "../components/ui/scroll-area";
import ArtistHeader from "../components/Artist/ArtistHeader";
import ArtistTopTracks from "../components/Artist/ArtistTopTracks";
import ArtistAlbums from "../components/Artist/ArtistAlbums";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { spotify_instance } from "../lib/api";

function Artist() {

    const { artist, topTracks, albums } = useLoaderData();
    return (
        <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
                <div>
                    <ArtistHeader artist={artist} />
                    <div className="px-6 py-4">
                        <ArtistTopTracks topTracks={topTracks} />
                        <ArtistAlbums albums={albums} />
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export async function getArtistLoader({ request }: LoaderFunctionArgs) {
    const artistId = request.url.split("/").pop();
    try {
        const response = await spotify_instance.get("/artists/" + artistId);
        return {
            artist: response.data.artist,
            topTracks: response.data.top_tracks.tracks,
            albums: response.data.artist_albums.items
        };

    } catch (error) {
        console.log(error);
        return null;
    }

}

export default Artist;