import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { CustomContext } from '../contexts/CustomContext'
const Navbar = () => {
    const { cartItems } = useContext(CustomContext)
    const badgeCount = cartItems.length
    return (
        <nav>
            <div className="container">
                <div className="navbar">
                    <Link to="/eCommerceApp" className="logo">Pics-Commerce</Link>
                    <Link to="/eCommerceApp/cart" className="badge-cart">
                        <FaShoppingCart className="icon-cart" />
                        {badgeCount > 0 && <span className="badge">{badgeCount}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
