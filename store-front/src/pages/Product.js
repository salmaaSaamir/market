import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/product.css';
import Swal from 'sweetalert2';
import axios from 'axios';

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [key, setKey] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    window.scrollTo(0, 640);
    fetch('http://localhost:54628/api/Product')
      .then((res) => res.json())
      .then((res) => {setData(res);setLoading(false);});
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(data.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const submitSearch = (e) => {
    e.preventDefault();
    if (key === '3' && !isNaN(value)) {
      fetch(`http://localhost:54628/api/Product/${key},${value}`)
        .then((res) => res.json())
        .then((res) => {setData(res);setLoading(false);});
    } else if (key !== '3') {
      fetch(`http://localhost:54628/api/Product/${key},${value}`)
        .then((res) => res.json())
        .then((res) => {setData(res);setLoading(false);})
        ;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'The price must be a number!',
      });
    }
  };
  const addToCart = (productId, product) => {
    axios.post('http://localhost:54628/api/Orders', {
      Product_id: productId,
      "product": {
        "id": 0,
        "name": "string",
        "price": 0,
        "category_id": 0,
        "category": {
          "id": 0,
          "name": "string"
        },
        "image": "string"
      }
    })
    .then(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your product has been added successfully',
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <>
     {loading ? (
        <div className="page-wrapper">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      ) :(
        <>
         <div className="d-flex text-capitalize m-4 justify-content-between align-items-center">
        <h1>all products</h1>
        <form
          className="d-flex"
          role="search"
          onSubmit={(e) => {
            submitSearch(e);
          }}
        >
          <input
            className="form-control me-1 searchInput"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <select
            className="form-select text-capitalize text-center m-1 searchInput"
            aria-label="Default select example"
            onChange={(e) => {
              setKey(e.target.value);
            }}
          >
            <option value={0} selected>
              get all
            </option>
            <option value={1}>name</option>
            <option value={2}>category</option>
            <option value={3}>price</option>
          </select>
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="content text-capitalize m-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} className="card-img-top" alt={product.name+" Image"} />
              <div className="card-body">
                <h5 className="card-title text-center">name : {product.name}</h5>
                <div className="d-flex justify-content-around">
                  <p className="card-text">price : {product.price}$</p>
                  <p className="card-text">category : {product.categoryName}</p>
                </div>
                <Link  className="btn btn-outline-dark addCart w-100" onClick={()=>addToCart(product.id , product)}>
                  add to my cart
                </Link>
          
              </div>
            </div>
          ))
        ) : (
          <h3 class="alert alert-danger text-center" role="alert">No results found.</h3>
        )}
      </div>
      <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index} className="page-item">
            <button onClick={() => paginate(index + 1)} className={`btn btn-dark m-2 ${currentPage === index + 1 ? 'active' : ''}`}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
        </>
      )}

    </>
  );
}

export default Product;
