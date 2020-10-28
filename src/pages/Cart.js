import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CustomContext } from '../contexts/CustomContext'
import CartItem from '../components/CartItem'

const Cart = () => {
    const [buttonText, setButtonText] = useState("Place Order")
    const [property, setProperty] = useState("vanish")
    const { cartItems, emptyCartItems } = useContext(CustomContext)
    const displayCartItems = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    })
    const totalPrice = cartItems.length * 199
    const totalPriceWithSign = `${totalPrice.toLocaleString('en-IN', {style:'currency', currency:'INR'})}`

    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCartItems()
            setProperty("appear")
        }, 3000)
    }
    return (
        <div className="container">
            <main className="cart-page">
                <h1>Cart Page</h1>
                {displayCartItems}
                {cartItems.length > 0 ? 
                    <p className="total-cost">
                        Total : {totalPriceWithSign}
                    </p> :
                    <div className="empty">
                        <p className="no-items">No Items in the Cart</p>
                        <Link to="/eCommerceApp">Go Back To Homepage</Link>
                    </div>
                }
                <div className="order-button">
                    {cartItems.length > 0 && 
                        <button disabled={buttonText === "Ordering..." ? true: false} onClick={placeOrder}>
                            {buttonText}
                        </button>
                    }
                </div>
                <div className={`alert-box ${property}`}>
                    <p>Your Order has been placed successfully.</p>
                    <button onClick={() => setProperty("vanish")}>OK</button>
                </div>
            </main>
        </div>
    )
}

export default Cart
