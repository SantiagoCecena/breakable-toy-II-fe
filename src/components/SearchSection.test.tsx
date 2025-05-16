import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchSection from './SearchSection';
import { useNavigate } from 'react-router';

// 1. Mockear useNavigate
vi.mock('react-router', () => ({
    useNavigate: vi.fn(),
}));

describe('SearchSection', () => {
    it('calls navigate with the correct query on form submit', () => {
        // mock navigate fn
        const mockNavigate = vi.fn();
        (useNavigate as unknown as { mockReturnValue: Function }).mockReturnValue(mockNavigate);

        // render the component
        render(<SearchSection />);

        // write in the input
        const input = screen.getByPlaceholderText(/Search for artists/i);
        fireEvent.change(input, { target: { value: 'Muse' } });

        // submit the form
        const form = input.closest('form')!;
        fireEvent.submit(form);

        // assert navigation
        expect(mockNavigate).toHaveBeenCalledWith('/search?q=Muse');
    });
});
