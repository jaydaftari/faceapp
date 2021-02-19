 import React from 'react';
 import Tilt from 'react-tilt'
 import infinity from './infinity.jpg';
 import './Logo.css';

const Logo = ()=>{
    return(
        <div className='ma4 mt0'>   
            <Tilt className="Tilt" options={{ max : 65 }} style={{ height: 100, width: 100 }}>
               <div className="Tilt-inner pa3 bg-purple"> 
               <img style={{paddingtop :'5px'}} alt='logo 'src={infinity}/> 
               </div>
    </Tilt>
</div>
    )
}


export default Logo;