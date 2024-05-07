import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from "vitest";
import Cart from '../components/layout/Cart/Cart';
import { CartContext } from '../components/contexts/CartContext';
import { CartActionsContext } from '../components/contexts/CartActionsContext';

function renderCartComponent(cartProducts) {
    return render(
        <CartContext.Provider value={{ cart:  cartProducts }}>
            <CartActionsContext.Provider value={{ removeProductFromCart: vi.fn(), incrementProductInCart: vi.fn(), decrementProductInCart: vi.fn() }}>
                <Cart/>
            </CartActionsContext.Provider>
        </CartContext.Provider>
    )
}

describe('Cart component', () => {
    it('renders the h1', () => {
        renderCartComponent([])
        const h1 = screen.getByRole('heading', {level: 1})
        expect(h1).toBeInTheDocument()
        expect(h1.textContent).toMatch(/Cart/i)
    })

    it('renders Your cart is empty message if there is no product in cart', () => {
        renderCartComponent([])
        const cartEmptyMessage = screen.getByText(/Your cart is empty\./i)
        expect(cartEmptyMessage).toBeInTheDocument()
    })

    it('renders each product in cart', () => {
        renderCartComponent([
            {id:1, name: 'product1', image:'', price: 2, quantity: 1},
            {id:2, name: 'product2', image:'', price: 8, quantity: 1},
            {id:3, name: 'product3', image:'', price: 3, quantity: 2}
        ])
        const cartEmptyMessage = screen.queryByText(/Your cart is empty\./i)
        expect(cartEmptyMessage).toBeNull()
        const cartItems = screen.getAllByTestId('cart-item')
        expect(cartItems.length).toEqual(3)
    })

    it('renders an OrderSummary component', () => {
        renderCartComponent([])
        const orderSummary = screen.getByText(/order summary/i)
        expect(orderSummary).toBeInTheDocument()
    })
})