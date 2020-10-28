import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { FaShoppingCart, FaRegHeart, FaHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { CustomContext } from '../contexts/CustomContext'

const Image = ({ photo, className }) => {
    const [hovered, setHovered] = useState(false)
    const { cartItems, toggleHeart, addToCart, removeFromCart } = useContext(CustomContext) 
    const heartIcon = hovered && <FaRegHeart className="favorite" onClick={() => toggleHeart(photo.id)} />
    const heartIconFilled = <FaHeart className="favorite" onClick={() => toggleHeart(photo.id)} />
    const addIcon = hovered && <FiShoppingCart className="cart" onClick={() => addToCart(photo)} />
    const addIconFilled = <FaShoppingCart className="cart" onClick={() => removeFromCart(photo)} />
    const alreadyInCart = cartItems.some(item => item.id === photo.id) 

    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={photo.url} alt={photo.id} className="image-grid" />
            {photo.isFavorite ? heartIconFilled : heartIcon}
            {alreadyInCart ? addIconFilled : addIcon}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
