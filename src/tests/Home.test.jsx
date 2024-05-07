import { render, screen } from "@testing-library/react";
import Home from "../components/layout/Home/Home";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from 'react-router-dom';
import { ProductsContext } from "../contexts/ProductsContext";

function renderHomeComponent() {
    return render(
        <MemoryRouter>
            <ProductsContext.Provider value={{
                products: [{id:1, name: 'product1', image:'', price: 2},
                {id:2, name: 'product2', image:'', price: 8},
                {id:3, name: 'product3', image:'', price: 3}],
                error:false,
                loading:false
            }}>
                <Home />
            </ProductsContext.Provider>
        </MemoryRouter>
    )
}

describe('Testing Home Component', () => {
    it('renders the component correctly', () => {
        const { container } = renderHomeComponent() // The Link component from react-router has to be inside a router for it to work
        screen.debug()
        expect(container).toMatchSnapshot()
    })

    it('renders the h1', () => {
        renderHomeComponent()
        const h1 = screen.getByRole('heading', {level: 1})
        expect(h1).toBeInTheDocument()
        expect(h1.textContent).toMatch('Pack your fruits.')
    })

    it('renders a Shop now button linked to he /shop path', () => {
        renderHomeComponent()
        const shopLinkBtn = screen.getByRole('button', {name: 'Shop now'})
        expect(shopLinkBtn).toBeInTheDocument()
        const shopLink = screen.getByRole('link', {name: 'Shop now'})
        expect(shopLink).toBeInTheDocument()
        expect(shopLink).toHaveAttribute('href', '/shop')
    })

    it('renders a ProductCarousel component if no error', () => {
        renderHomeComponent()
        const carousel = screen.getByTestId('carousel')
        expect(carousel).toBeInTheDocument()
    })
})