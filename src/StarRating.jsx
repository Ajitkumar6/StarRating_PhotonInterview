import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

//<AiOutlineStar/>
//<AiFillStar/>

export default function StarRating({ starCount }) {
  return (
    <div>
      <AiOutlineStar />
      <AiFillStar />
    </div>
  );
}
