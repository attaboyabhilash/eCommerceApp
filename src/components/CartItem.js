import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import { CustomContext } from '../contexts/CustomContext'

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CustomContext)
    const amount = 199
    return (
        <div className="cart-item">
            <MdDelete className="bin" onClick={() => removeFromCart(item)}/>
            <img src={item.url} alt={item.id} />
            <p>{amount.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
