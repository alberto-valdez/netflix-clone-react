import React, { useState } from 'react';
import '../assets/styles/slider.css';
import useGetMovies from '../hooks/useGetMovies';
import { AiOutlineLike, AiOutlineDislike, AiFillCaretRight } from "react-icons/ai";
import { BsPlus, BsChevronDown } from "react-icons/bs";
import { useEffect } from 'react';
import { useRef } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import ButtonSlide from './ButtonSlide';

import SliderWrapperComponent from './SliderWrapperComponent'
const SliderComponent = () => {
    const { isLoading,popular} = useGetMovies();
    const [translateVariable, setTranslateVariable] = useState<number>(0);
    const windowSize = useWindowSize()
    const [sizeRef, setSizeref] = useState<number>(0);
    const [viewsOnCarret, setViewOnCarret] = useState<number>(0);
    const [showDatailCard, setShowDetailCrad] = useState('none')
    let [elementRef, setElementRef] = useState(0);
   
    
    const ItemMovie = popular.map((movie, i)=>{
    
        return(
            <div  className='slider-item' key={i}>
            <img className='img-item' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  onError={(e)=>{e.currentTarget.onerror = null; e.currentTarget.src='https://www.cined.com/content/uploads/2020/03/Netflix-Corona_featured.jpg'}} alt={movie.title} />
            <span className='detail-card'>

                <div className='card-info'>
                        <div className="buttoms-card">
                            <span className='buttom-rounded'>
                            <AiFillCaretRight/>
                            </span>

                            <span className='buttom-rounded'>
                            <AiOutlineLike/>
                            </span>

                            <span className='buttom-rounded'>
                            <AiOutlineDislike/>
                            </span>

                            <span className='buttom-rounded'>
                            <BsPlus/>
                            </span>
                        </div>

                        <div>
                            <span className='buttom-rounded'>
                            <BsChevronDown/>
                            </span>
                        </div>
                </div>
            </span>
              
          </div>
        )
    })




    useEffect(()=>{
        const windowSize = window.innerWidth;
        setSizeref(windowSize)
    },[windowSize])

    useEffect(()=>{
        setViewOnCarret(React.Children.count(ItemMovie)-5);
        setElementRef(React.Children.count(ItemMovie)-5);
    },[isLoading])

    useEffect(()=>{
    },[viewsOnCarret])

 
    useEffect(()=>{
        if(translateVariable > 0){
            setTranslateVariable(0);
            setViewOnCarret(elementRef);
        }
    },[translateVariable])
  
  

    const handleSlide = (next:boolean, viewed:number) =>{
        if(next){
            if(viewsOnCarret > 0) {
                setTranslateVariable(translateVariable - sizeRef);
                setViewOnCarret(viewsOnCarret-viewed)

            } else {
                setTranslateVariable(0);
                setViewOnCarret(elementRef);
            }
        } else {
                setTranslateVariable(translateVariable + sizeRef);
                setViewOnCarret(viewsOnCarret+viewed)      
        }
    }

     return(
         <div>
             
             <h2 className='slider-title'>Novedades </h2>

             <SliderWrapperComponent>
                <div style={{transform:`translateX(${translateVariable}px)`, transition:'1s'}} className='slider-container'>        
                   {ItemMovie}
                </div>

                {translateVariable ? (   <ButtonSlide direction='prev' handleSlide={()=>handleSlide(false, 5)} icon='prev'/>) : (<span></span>) } 
                <ButtonSlide  direction='next' handleSlide={()=>handleSlide(true, 5)} icon='next'/>  
                 
             </SliderWrapperComponent>
           
                
       
 
          
   
               
         </div>
       
     )
}


export default SliderComponent;