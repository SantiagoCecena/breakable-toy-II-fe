import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import AlbumHeader from "../components/Album/AlbumHeader";
import AlbumTracks from "../components/Album/AlbumTracks";
import { ScrollArea } from "../components/ui/scroll-area";
import { spotify_instance } from "../lib/api";
import type { IAlbum, IFetchedAlbum } from "../types";

function Album() {

    const album = useLoaderData<IAlbum>();

    return (
        <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
                <div>
                    <AlbumHeader />

                    <AlbumTracks tracks={album.tracks.items} />

                    <div className="p-6 mt-8 text-gray-400 text-sm">
                        <p className="mb-1">{(new Date(album.release_date)).toDateString()}, {album.artists.map(artist => artist.name).join(", ")}</p>
                        <p>{album.copyrights}</p>
                    </div>

                </div>
            </ScrollArea>
        </div>
    )
}

export async function getAlbumLoader({ request }: LoaderFunctionArgs) {

    const albumId = request.url.split("/").pop();

    try {

        const response = await spotify_instance.get<IFetchedAlbum>("/albums/" + albumId);
        const data = {
            release_date: response.data.release_date,
            artists: response.data.artists,
            copyrights: response.data.copyrights?.[0]?.text,
            tracks: response.data.tracks,
            total_tracks: response.data.total_tracks,
            image: response.data.images[0].url,
            name: response.data.name,
            id: response.data.id,
        }
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export default Album;