import './Subtotal.css';

export default function Cart() {
    return (
        <section class="summary-card" id="summary">
            <h3>Summary</h3>
            <p>Subtotal: <a id='subtotal'>test</a> </p>
            <p>Estimated Delivery and Handling: <a id='shipping'>test</a> </p>
            <p>Taxes: <a id='tax'>test</a> </p>
            <p>Total: <a id='total'>test</a> </p>
            <button onClick={() => {
                console.log('checkout btn clicked')
                }} type="button">Checkout</button>
        </section>
    )
}