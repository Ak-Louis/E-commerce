import React, { useContext } from 'react'
//ShopContext is imported to get access to the addToCart, removeFromCart and cartItems
import { ShopContext } from '../../context/shop-context';
const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  //whenever we want o get access to addToCart function, we just put it down here : and also pass it down in the button as an onClick event 
  const {addToCart, cartItems} = useContext (ShopContext)
  // the cartItems add above is to be passed down in the addToCart button to display the number of items that has been added when clicked. i.e if the amount added is greater than 0, then display 
  const cartItemAmount = cartItems[id]
  //the above cartItem[id] is the amount ofthe specific product which is being passed down in the addToCart button
  return (
    <div className='product'>
      <img src={productImage}/> 
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>      
      <button className='addToCartBttn' onClick={()=> addToCart (id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>} 
      </button>
    </div>
  )
}

export default Product