import './Subtotal.css';

export default function Cart() {

    // const subtotal = () => {
        // let total = 0;
        // const prices = document.querySelectorAll('.item-price')

        // prices.forEach((price) => {
        //     console.log(price.dataset.price)
        //     return total += parseInt(price.dataset.price);
        // })

        // console.log('TOTAL: ', total)
    // }
    // subtotal()

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