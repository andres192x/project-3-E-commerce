import './Cart.css';
import trashIcon from '../../../Assets/trashIcon.png';
import Subtotal from '../../Subtotal/Subtotal';
import Login from '../Login/Login';
import Auth from '../../../utils/auth';

import { Navigate, useParams } from 'react-router-dom';
import {
    useState,
    useEffect
    } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_CART } from '../../../utils/queries';

import { useMutation } from '@apollo/client';
import { DELETE_ITEM } from '../../../utils/mutations';

export default function Cart() {
    // get user name from token
    let user = Auth.getProfile().data.name;
    console.log('USER: ', user)
    
    // query cart item by user's name from logged in token 
    const { data } = useQuery(QUERY_CART, {
        variables: {
            userName: user
        }
    });
    
    const cartItems = data?.findUserCart || [];
    // console.log('CARTITEMS: ', cartItems)
    const [cartData, setCartData] = useState(cartItems);

    useEffect(() => { 

        const cartData = data?.findUserCart || [];
        setCartData(cartData);
    })

    // renders user's cart based on query data
    const showUserCartData = (cartItems) => {
        console.log(cartItems)
        return cartItems.map((item, index) => {
            return (
                <div className="card" id={index}>
                    <div className='img-container'>
                        <img src={item.imgurl} alt={item.itemName} />
                    </div>
                    <div className='item-body'>
                        <p>{item.itemName}</p>
                        <p>{item.price}</p>
                        <div><a><img id={item._id} onClick={deleteItem} className='trash-icon' src={trashIcon} /></a></div>
                    </div>
                </div>
            )
        })
    }


    const [deleteCartItem] = useMutation(DELETE_ITEM)

    const deleteItem = async (e) => {
        e.preventDefault();
        const shirtID = e.target.id;
        console.log(shirtID)
        try {
            const deleteCart = await deleteCartItem({
              variables: { _id: shirtID }
            })
            console.log('DELETED CART ITEM: ', deleteCart)
            setCartData(deleteCart);

          }
          catch (err) {
            console.log(err)
          }
    }


    const login = Auth.loggedIn();

    return (
        <section className='product-section'>
            {login ?
                <div>
                    {showUserCartData(cartData)}
                    
                    <Subtotal />
                </div> :
                <Login />
            }
        </section>

    )
}