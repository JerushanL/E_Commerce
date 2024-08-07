import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const { all_product, cartItem, removeFromCart,getTotalCartAmound ,getTotalCartItems} = useContext(ShopContext)
    // console.log(all_product);
    // console.log(cartItem);

    return (
        <div className='cartitems'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Titile</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((item) => {
                if (cartItem[item.id] > 0) {
                    return <div>

                        <div className="cartitems-format cartitem-format-main">
                            <img src={item.image} className='carticon-product-icon' alt="" />
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <button className='cartitem-quantity'>{cartItem[item.id]}</button>
                            <p>${item.new_price * cartItem[item.id]}</p>
                            <img src={remove_icon} alt="" className='cartitem-removeicon' onClick={() => { removeFromCart(item.id) }} />
                            

                        </div>
                    </div>
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmound()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmound()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, Enter it here </p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems
