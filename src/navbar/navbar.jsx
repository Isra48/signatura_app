import React from 'react';
import  './navbar.css';
import ItusLogo  from '../assets/Itus_logo.png';
import SCLogo  from '../assets/SCL_Logo.png';


const Navbar = ({setinterruptor, interruptor}) => {
    return (
        <div className='Navbar_Container'>
        
            <h3>Signature  <span className='redfont'>App</span></h3>

            <div className='switch_container'>
            <img className=' Logo_SCL' src={SCLogo} alt="LOGO SCL" />


            <label class="switch">
                <input checked={interruptor} onChange={()=>setinterruptor(!interruptor)} className='toggle_company' type="checkbox" />
                    <span className="slider round" ></span>
            </label>
            <img  className='Logo'src={ItusLogo} alt="LOGO SCL" />



            </div>

            
        </div>
    );
}

export default Navbar;


