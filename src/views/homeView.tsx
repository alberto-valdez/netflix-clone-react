import React, { useEffect } from 'react';
import NavComponent from '../components/NavComponent';
import sample from '../assets/images/sample.jpg'
import useGetMovies from '../hooks/useGetMovies';
import SectionComponent from '../components/SectionComponent';
const HomeView = () => {

    const { isLoading,popular} = useGetMovies();
   

    useEffect(()=> {
      console.log(popular)
    },[ isLoading,])

     return(
       <div>
         <NavComponent/>
          <img className='img-sample' src={sample} alt="sample" />
         
         <SectionComponent
         Movies={popular}
         title='Populares En Netflix'
         />

        <SectionComponent
         Movies={popular}
         title='Mi Lista'
         />
       </div>
     )
}

export default HomeView;