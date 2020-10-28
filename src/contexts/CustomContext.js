import React, { useState, createContext, useEffect } from 'react'

export const CustomContext = createContext()

const CustomContextProvider = (props) => {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(err => console.error(err))
    }, [])

    const toggleHeart = (id) => {
        const updatedPhotos = photos.map(photo => {
            if(photo.id === id){
                return {...photo, isFavorite : !photo.isFavorite}
            }
            return photo
        })
        setPhotos(updatedPhotos)
    }

    const addToCart = (newItem) => {
        setCartItems(prevItem => [...prevItem, newItem])
    }

    const removeFromCart = (item) => {
        const updatedItems = cartItems.filter(items => items.id !== item.id)
        setCartItems(updatedItems)
    }

    const emptyCartItems = () => {
        setCartItems([])
    }
    
    return (
        <CustomContext.Provider value={{photos, cartItems, toggleHeart, addToCart, removeFromCart, emptyCartItems}}>
            {props.children}
        </CustomContext.Provider>
    )
}

export default CustomContextProvider
