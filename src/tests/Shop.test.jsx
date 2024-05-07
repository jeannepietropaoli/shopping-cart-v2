import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi} from "vitest";
import Shop, { numberOfLoadingProducts } from '../components/layout/Shop/Shop';
import { ProductsContext } from '../contexts/ProductsContext';
import { CartActionsContext } from '../contexts/CartActionsContext';

function renderShopComponent(products, error, loading) {
    render(
        <ProductsContext.Provider value={{ products, error, loading }}>
            <CartActionsContext.Provider value={{addProductToCart: vi.fn()}}>
                <Shop />
            </CartActionsContext.Provider>
        </ProductsContext.Provider>
    )
}

describe('Shop component', () => {
    it('renders the Shop page title', () => {
        renderShopComponent(
            [{id:1, name: 'product1', image:'', price: 2},
            {id:2, name: 'product2', image:'', price: 8},
            {id:3, name: 'product3', image:'', price: 3}],
            false,
            false
        )
        const pageTitle = screen.getByRole('heading', {level : 1})
        expect(pageTitle).toBeInTheDocument()
        expect(pageTitle.textContent).toMatch(/Shop/i)
    })

    it('renders a productCard component for each product when there is no error or loading', () => {
        renderShopComponent(
            [{id:1, name: 'product1', image:'', price: 2},
            {id:2, name: 'product2', image:'', price: 8},
            {id:3, name: 'product3', image:'', price: 3}],
            false,
            false
        )
        const productsList = screen.getByRole('list')
        expect(productsList).toBeInTheDocument()
        const productsListItems = screen.getAllByRole('listitem')
        expect(productsListItems.length).toEqual(3)
        const productCards = screen.getAllByTestId('product-card')
        expect(productCards.length).toEqual(3)
    })

    it('renders a definded number of loading products if there is no error and if loading is true', () => {
        renderShopComponent(null, false, true)
        const loadingProductCards = screen.getAllByTestId('loader')
        expect(loadingProductCards.length).toEqual(numberOfLoadingProducts)
    })

    it('renders NoItemsToShow component on error', () => {
        renderShopComponent([], true, false)
        const errorText = screen.getByText(/Oops, no items to show for now./i)
        expect(errorText).toBeInTheDocument()
    })
});