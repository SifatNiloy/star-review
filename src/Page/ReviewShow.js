import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const ReviewShow = () => {  
    const star=2;
    const [rating, setRating] = useState(3)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)        
    }
    // handleRating();
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value ,index) => console.log(value, index)

    return (
        <div className='App'>
            <Rating
                onClick={handleRating}
                // onPointerEnter={onPointerEnter}
                // onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
            /* Available Props */
            />
        </div>
    );
};

export default ReviewShow;