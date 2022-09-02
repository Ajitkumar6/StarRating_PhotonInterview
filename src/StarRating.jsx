import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}
const styles = {
    textarea : {
        margin: "12px",
        minHeight: "100px"
    }
}

function StarRating () {

    const [ratingValue, setRatingValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const starCount = Array(5).fill(0);

    const handleClick = (value) => {
        setRatingValue(value)
    }
    
    const handleMouseOver = (newValue) => {
        setHoverValue(newValue)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (
        <div>
            <div>
                <h1>Give your Star ratings here</h1>
                {starCount.map((_,index) => {
                    const rating = index + 1;
                    return (
                        <AiFillStar
                        key={index}
                        value={rating}
                        size = "25"
                        style = {{cursor:"pointer"}}
                        onClick = {()=> handleClick(index + 1)}
                        onMouseOver = {()=> handleMouseOver(index + 1)}
                        onMouseLeave = {handleMouseLeave}
                        color = {(hoverValue || ratingValue) > index ? colors.orange : colors.grey}
                        />
                    )
                })}
            </div>
            <textarea style={styles.textarea} placeholder="Type your comments..."></textarea>
            <div>
            <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default StarRating;
