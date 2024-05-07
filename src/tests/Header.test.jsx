import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from "vitest";
import Header from '../components/layout/Header/Header';

vi.mock('../components/layout/Header/Navbar', () => {
    const MockNavbar = (props) => <nav>
        <span data-testid="cart-count">{props.numberOfProductsInCart}</span>
        </nav>;
    return { default: MockNavbar };
  });

describe('Header component', () => {
    it('renders the website name containing link to / path', () => {
        render(
            <MemoryRouter>
              <Header numberOfProductsInCart={5} />
            </MemoryRouter>
          );

          const homepageLink = screen.getByRole('link', {name: /Fruictify./i})
          expect(homepageLink).toBeInTheDocument()
          expect(homepageLink).toHaveAttribute('href', '/')
            
    })
    it('renders Navbar component with the correct number of products in cart passed in props', () => {
        const numberOfProductsInCart = 5
        render(
        <MemoryRouter>
            <Header numberOfProductsInCart={numberOfProductsInCart} />
        </MemoryRouter>
        );

        const navElement = screen.getByRole('navigation');
        const count = screen.getByTestId('cart-count')
        
        expect(navElement).toBeInTheDocument();
        expect(count.textContent).toBe(numberOfProductsInCart.toString())
  });
});