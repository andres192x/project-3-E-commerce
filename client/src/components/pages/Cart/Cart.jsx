import './Cart.css';
import trashIcon from '../../../Assets/trashIcon.png';
import Subtotal from '../../Subtotal/Subtotal';

export default function Cart() {

    // ON RENDER, GET LOCAL STORAGE SHIRT ID'S
    // THEN FOREACH() FIND BY ID AND SHOW ON EACH CARD

    const name = 'HTML Shirt'
    const yes = 'yes'
    const size = 'Medium'
    const price = '$40'

    return (
        <section className='product-section'>
            <div className="card">
                <div className='img-container'>
                    {/* put img here */}
                    <div className="box">box</div>
                </div>
                <div className='item-body'>
                    <h2>{name}</h2>
                    <p> In Stock:  {yes}</p>
                    <p>{size}</p>
                    <p>{price}</p>
                    <div><a id="remove-item"><img onClick={() => { console.log('delete item clicked') }}  className='trash-icon' src={trashIcon} /></a></div>
                </div>
            </div>
            <Subtotal />
        </section>
    )
}