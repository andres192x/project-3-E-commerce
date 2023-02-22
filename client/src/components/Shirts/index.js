import React from 'react';
// import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_ONESHIRT } from '../../utils/queries';
import { ADD_CART } from '../../utils/mutations';
import Auth from '../../utils/auth'
const ShirtList = ({ shirts, title }) => {
  // const HandleCart = () => {
  const [addToCart] = useMutation(ADD_CART)
  const cartFunction = async (e) => {
    e.preventDefault()
    const name = e.target.parentNode.dataset.name
    const cost = e.target.parentNode.dataset.price
    const img = e.target.parentNode.dataset.img
    const username=Auth.getProfile().data.name
    console.log('USERNAME: ', username)
    try {
      const addingToCart = await addToCart({
        variables: {
          itemName: name,
          price: cost,
          imgurl: img,
          userName: username
        }
      })
      console.log(addingToCart)
    }
    catch (err) {
      console.log(err)
    }
    console.log(Auth.getProfile().data._id)
  }
  // }
  // const itemArray = []
  // const addItems = (e) => {
  //   // const getItems = JSON.parse(localStorage.getItem(('items')))
  //   // if (getItems != null) {
  //   //   getItems.push(e.target.parentNode.id)
  //   //   localStorage.setItem('items', JSON.stringify(getItems));
  //   // }
  //   // else {
  //   //   itemArray.push(e.target.parentNode.id)
  //   //   localStorage.setItem('items', JSON.stringify(itemArray));
  //   // }
  //   // console.log(getItems)
  // };
  return (
    <div>
      <h3>{title}</h3>
      <div id='displayShirts'>{shirts &&
        shirts.map((shirt) => (
          <div key={shirt._id} id={shirt._id} data-name={shirt.itemName} data-price={shirt.price} data-img={shirt.imgurl} className="shirt">
            <h4 className="shirt heading">
              {shirt.itemName} <br /></h4>
            <span style={{ fontSize: '0.8rem' }}>
              <img src={shirt.imgurl} alt={shirt.itemName}></img>
              <p>Price: {shirt.price}</p>
            </span>
            <button id={shirt._id} onClick={cartFunction} >Add to cart :shopping_trolley:</button>
          </div>
        ))}</div>
    </div>
  );
};
export default ShirtList;