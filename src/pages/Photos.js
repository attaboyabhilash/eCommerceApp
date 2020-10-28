import React, { useContext } from 'react'
import { CustomContext } from '../contexts/CustomContext'
import Image from '../components/Image'
import getClass from '../utils/Magic'

const Photos = () => {
    const { photos } = useContext(CustomContext)

    const photoElement = photos.map((photo, i) => {
        return <Image key={photo.id} photo={photo} className={getClass(i)} />
    })
    return (
        <div className="container">
            <main className="photos">
                {photoElement}
            </main>    
        </div>
    )
}

export default Photos
