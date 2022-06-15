import React from 'react'
import ReactStars from 'react-rating-stars-component'

function Rating({ rate }) {
    return (
        <ReactStars
            count={5}
            value={rate / 2}
            size={24}
            activeColor="#ffd700"
            edit={false}
            classNames='justify-content-center '
        />
    )
}

export default Rating