import { ScrollArea } from "../components/ui/scroll-area";
import ArtistHeader from "../components/Artist/ArtistHeader";
import ArtistTopTracks from "../components/Artist/ArtistTopTracks";
import ArtistAlbums from "../components/Artist/ArtistAlbums";
import { artistAlbums, mockArtist, topTracks } from "../mocks/artist";

function Artist() {
    return (
        <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
                <div>
                    <ArtistHeader artist={mockArtist} />
                    <div className="px-6 py-4">
                        <ArtistTopTracks topTracks={topTracks} />
                        <ArtistAlbums albums={artistAlbums} />
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default Artist;