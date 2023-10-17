import React from 'react'
import '../style/footer.css'
import Swal from 'sweetalert2'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone,faComment} from '@fortawesome/free-solid-svg-icons'
import img1 from'../assets/img/footer/market1.jpg'
import img2 from'../assets/img/footer/market2.jpg'
import img3 from'../assets/img/footer/market3.jpg'
import img4 from'../assets/img/footer/market4.jpg'
import img5 from'../assets/img/footer/market5.jpg'
import img6 from'../assets/img/footer/market6.jpg'
function Footer() {
  const sendMsg = (e)=>{
      e.preventDefault();
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your message has been send successfully',
        showConfirmButton: false,
        timer: 1500
      })
  }
  return (
    <>
    
    <footer class="bg-dark text-center text-white">
    <div class="container p-4">
    <section class="mb-4">
 
      <button class="btn btn-outline-light btn-floating m-1" href="" ><FontAwesomeIcon icon={faPhone} color='#ff758f' /></button>
      <button class="btn btn-outline-light btn-floating m-1" href="" ><FontAwesomeIcon icon={faComment} color='#ff758f'/></button>

    </section>
    <section class="">
      <form action="">
    
        <div class="row d-flex justify-content-center">
        
          <div class="col-auto">
            <p class="pt-2">
              <strong>Send Us Your Message</strong>
            </p>
          </div>
    
          <div class="col-md-5 col-12">
      
            <div class="form-outline form-white mb-4">
              <input type="text" id="form5Example21" class="form-control msg" />
              <label class="form-label m-2" for="form5Example21">Message</label>
            </div>
          </div>

          <div class="col-auto">
        
            <button type="submit" class="btn btn-outline-light mb-4" onClick={(e)=>sendMsg(e)}>
              Send
            </button>
          </div>
  
        </div>
       
      </form>
    </section>
    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    <section class="">
      <div class="row">
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img src={img1} class="w-100  footerImg m-3" alt=''/>
          
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img src={img2} class="w-100  footerImg m-3" alt='' />
            
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img  src={img3}class="w-100  footerImg m-3" alt='' />
            
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img  src={img4}class="w-100 m-3 footerImg" alt=''/>
          
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img src={img5}class="w-100 m-3 footerImg" alt='' />
            
          </div>
        </div>
        <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img src={img6} class="w-100 m-3 footerImg" alt=''/>
            
          </div>
        </div>
      </div>
    </section>
    </div>
    </footer>

    </>
  )
}

export default Footer