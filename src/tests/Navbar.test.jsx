import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from "vitest";
import Navbar from '../components/layout/Header/Navbar';

describe('Navbar component', () => {
    it('renders a navigation with home, shop and cart links correctly', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        const nav = screen.getByRole('navigation')
        const homepageLink = screen.getByRole('link',{name: /home/i})
        const shopLink = screen.getByRole('link', {name: /shop/i})
        const cartLink = screen.getByRole('link', {name: /cart/i})
        expect(nav).toBeInTheDocument()
        expect(homepageLink).toHaveAttribute('href', '/')
        expect(shopLink).toHaveAttribute('href', '/shop')
        expect(cartLink).toHaveAttribute('href', '/cart')
    })

    it('renders the correct numberOfProductsInCart passed in props', () => {
        render(
            <MemoryRouter>
                <Navbar numberOfProductsInCart={2} />
            </MemoryRouter>
        )

        const cartCount = screen.getByTestId('nav-cart-count')
        expect(cartCount.textContent).toBe('2')
    })

    it('renders 0 as the numberOfProductsInCartCount when no numberOfProductsInCart prop is passed', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        const cartCount = screen.getByTestId('nav-cart-count')
        expect(cartCount.textContent).toBe('0')
    })
});