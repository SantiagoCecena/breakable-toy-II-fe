import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useLoaderData } from 'react-router';
import MainDashboard from './MainDashboard';

// Mocking react-router hooks and elements
vi.mock('react-router', () => ({
    useLoaderData: vi.fn(),
    useNavigate: vi.fn(),
    Link: vi.fn(({ children }) => <div>{children}</div>),
}));

describe('MainDashboard', () => {
    it('renders top artists from loader', () => {
        // Define what loader data should return
        (useLoaderData as jest.Mock).mockReturnValue([
            { id: '1', name: 'Artist One', image: 'image1.jpg' },
            { id: '2', name: 'Artist Two', image: 'image2.jpg' },
        ]);

        // Render the component
        render(<MainDashboard />);

        // Assertions
        expect(screen.getByText('Your Top 10 Artist')).toBeInTheDocument();
        expect(screen.getByText('Artist One')).toBeInTheDocument();
        expect(screen.getByText('Artist Two')).toBeInTheDocument();
    });
});
