import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineLike, AiOutlineDislike, AiFillCaretRight } from "react-icons/ai";
import { BsPlus, BsChevronDown } from "react-icons/bs";
import { Movie } from '../interfaces/moviesInterfaces';
 
    interface Props {
        Movies: Movie[];
        title: string;
    }



  const SectionComponent = ({Movies, title}:Props) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
          slidesToSlide: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 3
        }
      };
    
      const ItemMovie = Movies.map((movie)=>{
        return(
          <div >

            <img className='movie-card' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
              <div className='detail-card'>

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
           
                <div className='card-info'>
                <h5 className='average'>{movie.vote_average} para ti!</h5>
               
                </div>
               
              </div>
          </div>
        )
})

       
    return(
       <div>
            <div className='card-container'>
            <h1 className='carousel-title'>{title}</h1>
            <Carousel
            containerClass="carousel-container"

            responsive={responsive}>
            {ItemMovie}
          </Carousel>
          </div>
       </div>
     )
}

export default SectionComponent;