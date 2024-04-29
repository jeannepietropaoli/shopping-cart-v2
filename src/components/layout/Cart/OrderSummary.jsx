import '../../../styles/OrderSummary.css'

export default function OrderSummary({cart}) {
    const orderTotalBeforeVAT = cart.reduce((total, currentProduct) => total + currentProduct.price * currentProduct.quantity, 0)
    const orderVAT = parseFloat((orderTotalBeforeVAT * 0.2).toFixed(2));
    const orderTotal = orderTotalBeforeVAT + orderVAT;

    return (
        <section className='order-summary'>
                <h3 className='secondary-title'>Order Summary</h3>
                <div className='order-summary__category'>
                    <h4>Subtotal</h4>
                    <p>{orderTotalBeforeVAT}$</p>
                </div>
                <div className='order-summary__category'>
                    <h4>VAT (20%)</h4>
                    <p>{orderVAT}$</p>
                </div>
                <div className='order-summary__category order-summary__category--total'>
                    <h4>Total</h4>
                    <p>{orderTotal}$</p>
                </div>
                <button className='order-summary__btn'>Checkout</button>
        </section>
    )
}