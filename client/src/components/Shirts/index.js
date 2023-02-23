import React from 'react';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SHIRTCATEGORY } from '../../utils/queries';
import { ADD_CART } from '../../utils/mutations';
import Auth from '../../utils/auth'
// import Integer from 'Math'
const ShirtList = ({ shirts, title }) => {
  const [allShirts, setShirts] = useState(shirts)
  const [vari, setVar] = useState('shirtHoodie')
  const [addToCart] = useMutation(ADD_CART)
  // const categoryVar = "shirt"

  const setShirt = (e) => {
    e.preventDefault()
    setVar('shirt')
  }

  const setHoodie = (e) => {
    e.preventDefault()
    setVar('hoodie')
  }

  const clearFilter = (e) => {
    e.preventDefault()
    setVar('shirtHoodie')
  }

  const { data } = useQuery(QUERY_SHIRTCATEGORY, {
    variables: { category: vari }
  })

  useEffect(() => {
    const filteredShirts = data?.findShirt || []
    setShirts(filteredShirts)
    console.log(filteredShirts)
  })

  const cartFunction = async (e) => {
    e.preventDefault()
    const name = e.target.parentNode.dataset.name
    const cost = e.target.parentNode.dataset.price
    const img = e.target.parentNode.dataset.img
    const username = Auth.getProfile().data.name
    const userID = Auth.getProfile().data._id
    console.log('USERID: '.userID)
    const qnty = parseInt(e.target.previousSibling.children[1].value)
    console.log(typeof qnty)
    try {
      const addingToCart = await addToCart({
        variables: {
          itemName: name,
          price: cost,
          imgurl: img,
          userName: username,
          userID: userID,
          qty: qnty
        }
      })
      console.log(addingToCart)
    }
    catch (err) {
      console.log(err)
    }
    console.log(Auth.getProfile().data._id)
  }
  return (
    <div className='collection-container'>
      <div className='filter-container'>
        <button className='btn-item' id='gettingShirt' onClick={setShirt}>Shirts</button>
        <button className='btn-item' id='gettingHoodie' onClick={setHoodie}>Hoodies</button>
        <button className='btn-item' id='getAll' onClick={clearFilter}>Show All</button>
      </div>
      <div className='shirt-container' id='displayShirts'>{allShirts &&
        allShirts.map((shirt) => (
          <div key={shirt._id} id={shirt._id} data-name={shirt.itemName} data-price={shirt.price} data-img={shirt.imgurl} className="shirt">
            <h4 className="shirt">
              {shirt.itemName} <br /></h4>
            <span style={{ fontSize: '0.8rem' }}>
              <img className='product-img' src={shirt.imgurl} alt={shirt.itemName}></img>
              <p>Price: {shirt.price}</p>
            </span>
            <section className='quantity-container' key={shirt.id}><label>Qty: </label>
              <select key={shirt.id}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option></select></section>
            <button id={shirt._id} onClick={cartFunction} >Add to cart 🛒</button>
          </div>
        ))}</div>
    </div>
  );
};
export default ShirtList;