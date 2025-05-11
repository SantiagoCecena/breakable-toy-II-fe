import type { Artist } from "../types";
import ArtistCard from "./ArtistCard";

function TopArtists({ artists }: { artists: Artist[] }) {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {artists.map((artist) => {
                return <ArtistCard key={artist.id} artist={artist} />
            })}
        </section>
    )
}

export default TopArtists;