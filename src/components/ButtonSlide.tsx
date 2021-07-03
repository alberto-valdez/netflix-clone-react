import React from 'react';
import '../assets/styles/ButtonSlide.css';

import { AiOutlineDown } from "react-icons/ai";

interface Props {
    direction:string;
    handleSlide: () => void;
    icon: string;
}
 
const ButtonSlide = ({direction, handleSlide, icon}:Props) => {


     return(
        <button className={`slide-button ${direction}`} onClick={()=>handleSlide()}>
                   <span>
                       <AiOutlineDown/>
                   </span>
        </button>
     )
}

export default ButtonSlide;