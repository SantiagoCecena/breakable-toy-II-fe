import AlbumCard from "../Album/AlbumCard";

function ArtistAlbums({ albums }: { albums: any[] }) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Albums</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {albums.slice(0, 10).map(album => (
                    <AlbumCard key={album.id} album={album} />
                ))}
            </div>
        </section>
    )
}

export default ArtistAlbums;