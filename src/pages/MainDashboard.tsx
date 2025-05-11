import type { Artist } from "../types";
import SearchSection from "../components/SearchSection";
import TopArtists from "../components/TopArtists";
import { ScrollArea } from "../components/ui/scroll-area";

const topArtists: Artist[] = [
    {
        id: "1",
        name: "The Weeknd",
        image: ""
    },
    {
        id: "2",
        name: "Dua Lipa",
        image: ""
    },
    {
        id: "3",
        name: "Kendrick Lamar",
        image: ""
    },
    {
        id: "4",
        name: "Billie Eilish",
        image: ""
    },
    {
        id: "5",
        name: "Tyler, The Creator",
        image: ""
    },
    {
        id: "6",
        name: "Arctic Monkeys",
        image: ""
    },
    {
        id: "7",
        name: "Tame Impala",
        image: ""
    },
    {
        id: "8",
        name: "Frank Ocean",
        image: ""
    },
    {
        id: "9",
        name: "SZA",
        image: ""
    },
    {
        id: "10",
        name: "Bad Bunny",
        image: ""
    },
]

function MainDashboard() {
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

export default MainDashboard;