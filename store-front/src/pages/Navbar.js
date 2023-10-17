import React, { useEffect, useState } from 'react'
import '../style/nav.css'
import '../js/scripts'
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore,faTrash ,faCartShopping} from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  const [data,setData] = useState([{}]);
  const [count,setCount] = useState(0); 
  const [ToalPrice,setTotalPrice] = useState(0)
  useEffect(() => {
    fetch('http://localhost:54628/api/Orders')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setCount(res.length);
        const totalPrice = res.reduce((sum, item) => sum + item.product?.price || 0, 0);
        setTotalPrice(totalPrice);
      });
  }, [data]);
  const confirmOrder=()=>{ 
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your product has been confirmed successfully',
      showConfirmButton: false,
      timer: 1500
    })
    axios.delete(`http://localhost:54628/api/Orders`)
  }
  const delteOrder =(id)=>{
    console.log(id)
    axios.delete(
      `http://localhost:54628/api/Orders/${id}`)
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
    <div className='d-flex m-2 p-2 w-25'>
     <FontAwesomeIcon icon={faStore} className='m-2' fontSize={20} color='#ff758f ' />
    <h1 className="navbar-brand text-light">Online Market</h1>
     </div>
        <div class="collapse navbar-collapse justify-content-around" id="navbarResponsive">
        <ul className="navbar-nav d-flex text-uppercase  py-4 py-lg-0 ">
            <li className="nav-item m-2">
              <Link to={'/'} className="nav-link active text-light " aria-current="page" onClick={()=> {window.scrollTo(0,0)}}>Home</Link>
            </li>
            <li className="nav-item m-2">
              <Link to={'/product'} className="nav-link active text-light " aria-current="page">Product</Link>
            </li>
            <li className="nav-item m-2">
              <Link to={'/contact'} className="nav-link active text-light " aria-current="page" onClick={()=> {window.scrollTo(0,2150)}}>Contact</Link>
            </li>
            <li className="nav-item m-2">
              <Link to={'/about'} className="nav-link active text-light " aria-current="page" onClick={()=> {window.scrollTo(0,670)}}>About</Link>
            </li>
        </ul>
        </div>
    </div>
    <div className='d-flex m-2 p-2 w-25 text-light text-uppercase'>
       <FontAwesomeIcon className='m-2' icon={faCartShopping} fontSize={22} color='#ff758f ' /><p className='count'>{count}</p>
       <span type='button' className='m-2 ' data-bs-toggle="modal" data-bs-target="#staticBackdrop">my orders</span>
        
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-dark" id="staticBackdropLabel">your product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-dark">
      <table class="table text-center mx-auto">
  <thead>
    <tr className=''>
      <th scope="col">Product name</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">option</th>
    </tr>
  </thead>
  <tbody>
   
  {data.map((item) => (
        <tr className=''>
          <td>{item.product?.name}</td>
          <td>{item.product?.price}</td>
          <td>1</td>
          <td><FontAwesomeIcon icon={faTrash} color='#ef476f' type='button' onClick={()=> {delteOrder(item.id)}} /></td>
        </tr>
      
    )
  )}

    <td colSpan={4}>
    total price : {ToalPrice}
    </td>

  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>confirmOrder()}>confirm order</button>
      </div>
    </div>
  </div>
</div>
   </div>
</nav>
  )
}

export default Navbar