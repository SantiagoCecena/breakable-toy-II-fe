import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ArtistCard from './ArtistCard';


describe('ArtistCard', () => {
    const mockArtist = {
        id: '123',
        name: 'The weeknd',
        image: 'https://example.com/theWeeknd.jpg'
    };

    it('renders artist name and image', () => {
        render(
            <MemoryRouter>
                <ArtistCard artist={mockArtist} />
            </MemoryRouter>
        );

        // Verify artist name
        expect(screen.getByText('The weeknd')).toBeInTheDocument();

        // Verify artist image
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', mockArtist.image);
        expect(img).toHaveAttribute('alt', 'The weeknd');
    });

    it('links to the correct artist page', () => {
        render(
            <MemoryRouter>
                <ArtistCard artist={mockArtist} />
            </MemoryRouter>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/artist/123');
    });

    it('renders placeholder image when no image provided', () => {
        render(
            <MemoryRouter>
                <ArtistCard artist={{ id: '456', name: 'Unknown Artist' }} />
            </MemoryRouter>
        );

        const img = screen.getByRole('img');
        expect(img.getAttribute('src')).toMatch(/placeholder/); // asume que tiene 'placeholder' en el path
    });
});
