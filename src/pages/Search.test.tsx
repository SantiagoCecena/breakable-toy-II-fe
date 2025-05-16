import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi } from 'vitest';
import Search from './Search';
import { useLoaderData } from 'react-router';
const mockedUseLoaderData = useLoaderData as jest.Mock;

// Mock children componentes
vi.mock('../components/ArtistCard', () => ({
    default: ({ artist }: any) => <div data-testid="artist-card">{artist.name}</div>
}));

vi.mock('../components/Album/AlbumCard', () => ({
    default: ({ album }: any) => <div data-testid="album-card">{album.name}</div>
}));

vi.mock('../components/TracksTable', () => ({
    default: ({ tracks }: any) => <div data-testid="tracks-table">{tracks.length} tracks</div>
}));

// Mock of useLoaderData hook
vi.mock('react-router', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-router')>();
    return {
        ...actual,
        useLoaderData: vi.fn(),
    };
});

describe('<Search />', () => {
    it('renders all sections when data is present', () => {
        mockedUseLoaderData.mockReturnValue({
            artists: [{ id: '1', name: 'The weeknd' }],
            albums: [{ id: 'a1', name: 'The smiths' }],
            tracks: [{ id: 't1', name: 'Jose jose' }],
        });

        render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );

        // Artists
        expect(screen.getByText('Artists')).toBeInTheDocument();
        expect(screen.getByTestId('artist-card')).toBeInTheDocument();

        // Albums
        expect(screen.getByText('Albums')).toBeInTheDocument();
        expect(screen.getByTestId('album-card')).toBeInTheDocument();

        // Tracks
        expect(screen.getByText('Tracks')).toBeInTheDocument();
        expect(screen.getByTestId('tracks-table')).toHaveTextContent('1 tracks');
    });

    it('does not render empty sections', () => {
        mockedUseLoaderData.mockReturnValue({
            artists: [],
            albums: [],
            tracks: [],
        });

        render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );

        expect(screen.queryByText('Artists')).not.toBeInTheDocument();
        expect(screen.queryByText('Albums')).not.toBeInTheDocument();
        expect(screen.queryByText('Tracks')).not.toBeInTheDocument();
    });
});
