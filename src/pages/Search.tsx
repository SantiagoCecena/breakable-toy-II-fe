import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { spotify_instance } from "../lib/api";
import { type ISearchItems, type ISearchResponse } from "../types";
import ArtistCard from "../components/ArtistCard";
import { ScrollArea } from "../components/ui/scroll-area";
import AlbumCard from "../components/Album/AlbumCard";
import SearchSection from "../components/SearchSection";
import TracksTable from "../components/TracksTable";

function Search() {

    const { albums, artists, tracks } = useLoaderData<ISearchItems>();

    return (
        <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
                <div className="p-6">
                    <SearchSection />

                    {artists.length > 0 && (
                        <section className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-bold">Artists</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {artists.slice(0, 5).map(artist => (
                                    <ArtistCard key={artist.id} artist={artist} />
                                ))}
                            </div>
                        </section>
                    )}

                    {albums.length > 0 && (
                        <section className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-bold">Albums</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {albums.slice(0, 5).map(album => (
                                    <AlbumCard key={album.id} album={album} />
                                ))}
                            </div>
                        </section>
                    )}

                    {tracks.length > 0 && (
                        <section className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-bold">Tracks</h2>
                            </div>
                            <TracksTable tracks={tracks} />
                        </section>
                    )}

                </div>

            </ScrollArea>
        </div>
    );
}

export async function searchLoader({ request }: LoaderFunctionArgs) {

    const searchString = request.url.slice(request.url.indexOf("?"));
    const searchQuery = new URLSearchParams(searchString);
    const search = searchQuery.get("q");

    try {
        const response = await spotify_instance.get<ISearchResponse>("/search", {
            params: {
                q: search
            }
        })
        const data = response.data;
        return {
            albums: data.albums.items,
            artists: data.artists.items.map(artist => ({ ...artist, image: artist.images[0]?.url })),
            tracks: data.tracks.items,
        };

    } catch (error) {
        console.log("Error fetching search results:", error);
        return [];
    }
}

export default Search