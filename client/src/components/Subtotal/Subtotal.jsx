import './Subtotal.css';

export default function Cart() {
    return (
        <section class="summary-card" id="summary">
            <h3>Summary</h3>
            <p>Subtotal: </p>
            <p>Estimated Delivery and Handling:</p>
            <p>Taxes: test </p>
            <p>Total:  </p>
            <button onClick={() => {
                console.log('checkout btn clicked')
                }} type="button">Checkout</button>
        </section>
    )
}