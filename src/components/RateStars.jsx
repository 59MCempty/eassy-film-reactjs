import React from 'react';
import {Star, StarFill,  StarHalf as StarEmpty} from "react-bootstrap-icons"
const RateStars = ({rating}) => {

    const starList = []
    const starfillCount = Math.floor(rating) // lay phan nguyen -- 2
    const hasHalfStar = rating - parseInt(rating) >= 0.5 // phan thap phan >= 0.5 true oposite false
    const emptyStarCount = 5 - starfillCount - (hasHalfStar ? 1 : 0) // 5 - 2 - 0

    for (let i =0; i <starfillCount; i++) {
        starList.push(<StarFill />)
    }
    if(hasHalfStar) {
        starList.push(<StarEmpty />)
    }
    for (let i =0; i < emptyStarCount; i++) {
        starList.push(<Star />)
    }




    return (
        <div className="flex gap-2">
            <h4 className="flex">{starList}</h4>
            <h4 className="relative bottom-1">{rating} / 5</h4>
        </div>
    );
};

export default RateStars ;
