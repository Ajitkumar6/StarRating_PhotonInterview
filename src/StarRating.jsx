import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
// import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import './App';
import './styles.css';
//<AiOutlineStar/>
//<AiFillStar/>
// Photon Interview Task
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};


export default function StarRating() {
  const starCount = Array(5).fill(0);
  const [ currentValue, setCurrentValue ] = useState(0);
  const [ hoverValue, setHoverValue ] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value)
  }

  const handleMouseover = (newvalue) => {
    setHoverValue(newvalue)
  }

  const handleMouseleave = () => {
    setHoverValue(undefined)
  }

  return (
    <div>
      <h1>Star Ratings in React</h1>
      {starCount.map((_, index) => {
        return (
          <AiFillStar 
          key={index}
          size={24} 
          onClick = {() => handleClick(index + 1)}
          onMouseOver = {() => handleMouseover(index + 1)}
          onMouseLeave = {handleMouseleave}
          // className = "mouseover"
          color = { (currentValue || hoverValue) > index ? colors.orange : colors.grey }
          style={{
            cursor: "pointer"
          }}
          />
        )
      })}
    </div>
  );
}
