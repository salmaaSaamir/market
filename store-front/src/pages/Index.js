import React , { useEffect } from 'react'
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';
function Index() {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <><Navbar /> <Header /> <About /> <Contact /> <Footer /> </>
  )
}

export default Index