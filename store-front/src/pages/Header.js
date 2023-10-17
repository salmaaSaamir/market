import React, { useEffect } from 'react'
import '../style/header.css'
import sample from '../assets/v2.mp4'
import { Link } from "react-router-dom";
function Header() {

  return (
   <>
    <header>
   <div className='video'>
   <video className='w-100' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
    </video>
   </div>
    <div className='headerContent text-capitalize text-center text-light w-100 d-flex flex-column justify-content-center'>
        <h1 className='m-3'>
            hello in the market 
        
        </h1>
        <div className='m-2 p-2 text-capitalize btns'>
        <Link to={'/product'} type="button" class="btn btn-dark m-2">start shoping</Link>
        <Link to={'/contact'} type="button" class="contactbtn btn  m-2">contact with us</Link>
        </div>
    </div>
    </header>
   </>
  )
}

export default Header