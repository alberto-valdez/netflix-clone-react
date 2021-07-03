import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
 import logo from '../assets/images/logo-netflix.png'
 
  const NavComponent = () => {
     

    let listener = null;
    const [scrollState, setScrollState] = useState<string>('nav-container');

    useEffect(()=>{
        listener = document.addEventListener("scroll", e=>{
            let scrolled:any = document.scrollingElement?.scrollTop;
            if(scrolled >= 3){
                if(scrollState !== 'nav-container-bg'){
                    setScrollState('nav-container-bg');
                }
            } else {
            
                if(scrollState !== 'nav-container'){
                    setScrollState('nav-container');
                    
                }
            }
        })
    },[scrollState]);

    
    
    return(
        <div className={`${scrollState}`}>
        <div className='nav'>
            <div className='nav-dirction'>
                <img src={logo} alt="Netflix" />
                <h3>Inicio</h3>
                <h3>Series</h3>
                <h3>Películas</h3>
                <h3>Novedades Populares</h3>
                <h3>Mi lista</h3>
            </div>

            <div className='nav-dirction'>
                <h3></h3>
                <h3></h3>
                <h3></h3>
                <h3></h3>
            </div>
        </div>
        </div>
    )
}

export default NavComponent;