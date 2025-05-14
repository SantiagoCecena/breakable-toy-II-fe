import { Button } from '../ui/button';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { formatNumberWithCommas } from '../../lib/utils';

function ArtistHeader({ artist }: { artist: any }) {
    return (
        <div className="relative">
            <div className="abolute inset-0 bg-gradient-to-b from-transparent to-spotify-gray z-10" />
            <div className="h-[40vh] relative bg-gradient-to-br from-gray-900 to-gray-950">
                {/* <img src={artist.images[0].url} alt={artist.name} className="object-cover max-h-[40vh] w-full" /> */}
            </div>
            <div className="relative z-20 px-6 -mt-32 pb-6">
                <Button variant="ghost" size="sm" asChild className="mb-4">
                    <Link to="/">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back
                    </Link>
                </Button>
                <div className="flex flex-col md:flex-row items-end gap-6">
                    <div className="flex-shrink-0 hidden md:block">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl">
                            <img src={artist.images[0].url} alt={artist.name} className="object-cover" />
                        </div>
                    </div>
                    <div>
                        <p className="text-xs uppercase font-bold">Artist</p>
                        <h1 className="text-5xl md:text-7xl font-bold mt-2 mb-4">{artist.name}</h1>
                        <div className="text-sm text-gray-300">
                            <span>{formatNumberWithCommas(artist.followers.total)} followers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistHeader;