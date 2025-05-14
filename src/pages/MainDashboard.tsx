import type { IFetchedArtist } from "../types";
import SearchSection from "../components/SearchSection";
import TopArtists from "../components/TopArtists";
import { ScrollArea } from "../components/ui/scroll-area";
import { spotify_instance } from "../lib/api";
import { useLoaderData } from "react-router";


function MainDashboard() {

    const topArtists = useLoaderData();

    return (
        <ScrollArea className="h-[calc(100vh-64px)]">
            <SearchSection />
            <div className="p-6">
                <section className="mb-8">
                    <article className="mb-4">
                        <h2 className="text-3xl font-bold">Your Top 10 Artist</h2>
                    </article>
                    <TopArtists artists={topArtists} />
                </section>
            </div>
        </ScrollArea>
    )
}

export async function getTopTenArtistLoader() {
    try {
        interface TopArtistsResponse { previous: string, next: string, items: IFetchedArtist[] }
        const response = await spotify_instance.get<TopArtistsResponse>("/me/top/artists")
        const data = response.data.items.map((artist) => {
            return ({
                id: artist.id,
                name: artist.name,
                image: artist.images[0].url
            })
        })
        return data;

    } catch (error) {
        console.log("Error fetching top artists:", error);
        return [];
    }
}
export default MainDashboard;