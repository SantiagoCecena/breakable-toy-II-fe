export interface IArtist {
    id: string;
    name: string;
    image: string;
}

export interface IFetchedArtist {
    "external_urls": { "spotify": "string" },
    "followers": { "href": "string", "total": number },
    "genres": string[],
    "href": string,
    "id": string,
    "images": [{ "url": string, "height": number, "width": number }],
    "name": string,
    "popularity": number,
    "type": "artist",
    "uri": "string"

}

export interface IAlbum {
    id: string;
    name: string;
    image: string;
    artists: IFetchedArtist[];
    release_date: string;
    tracks: {
        href: string;
        limit: number;
        next?: string;
        offset: number;
        previous?: string;
        total: number;
        items: {
            artists: {
                external_urls: { spotify: string };
                href: string;
                id: string;
                name: string;
                type: string;
                uri: string;
            }[];
            available_markets: string[];
            disc_number: number;
            duration_ms: number;
            explicit: boolean;
            external_urls: { spotify: string };
            href: string;
            id: string;
            is_playable: boolean;
            linked_from?: {
                external_urls: { spotify: string };
                href: string;
                id: string;
                type: string;
                uri: string;
            };
            restrictions?: { reason: string };
            name: string;
            preview_url: string;
            track_number: number;
            type: string;
            uri: string;
            is_local: boolean;
        }[];
    }
    total_tracks: number;
    copyrights: string;
}

export interface IFetchedAlbum {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: { url: string; height: number; width: number }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions?: { reason: string };
    type: string;
    uri: string;
    artists: {
        external_urls: { spotify: string };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
    }[];
    tracks: {
        href: string;
        limit: number;
        next?: string;
        offset: number;
        previous?: string;
        total: number;
        items: {
            artists: {
                external_urls: { spotify: string };
                href: string;
                id: string;
                name: string;
                type: string;
                uri: string;
            }[];
            available_markets: string[];
            disc_number: number;
            duration_ms: number;
            explicit: boolean;
            external_urls: { spotify: string };
            href: string;
            id: string;
            is_playable: boolean;
            linked_from?: {
                external_urls: { spotify: string };
                href: string;
                id: string;
                type: string;
                uri: string;
            };
            restrictions?: { reason: string };
            name: string;
            preview_url: string;
            track_number: number;
            type: string;
            uri: string;
            is_local: boolean;
        }[];
    };
    copyrights?: { text: string; type: string }[];
    external_ids?: { isrc?: string; ean?: string; upc?: string };
    genres: string[];
    label: string;
    popularity: number;
}

export interface IFetchedTrack {
    album: {
        album_type: string;
        total_tracks: number;
        available_markets: string[];
        external_urls: { spotify: string };
        href: string;
        id: string;
        images: { url: string; height: number; width: number }[];
        name: string;
        release_date: string;
        release_date_precision: string;
        restrictions?: { reason: string };
        type: string;
        uri: string;
        artists: {
            external_urls: { spotify: string };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
        }[];
    };
    artists: {
        external_urls: { spotify: string };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
    }[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: { isrc?: string; ean?: string; upc?: string };
    external_urls: { spotify: string };
    href: string;
    id: string;
    is_playable: boolean;
    linked_from?: Record<string, unknown>;
    restrictions?: { reason: string };
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}

export interface ISearchResponse {
    albums: {
        items: IFetchedAlbum[];
    },
    artists: {
        items: IFetchedArtist[];
    },
    tracks: {
        items: IFetchedTrack[];
    }
}

export interface ISearchItems {
    albums: IFetchedAlbum[];
    artists: IFetchedArtist[];
    tracks: IFetchedTrack[];
}