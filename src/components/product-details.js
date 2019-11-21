import React, { useState, useEffect, useContext } from 'react';
import superagent from 'superagent';
import { AuthContext } from '../authContext';
import Footer from './fixed-footer';
import CategoriesList from './categories-list';

import '../styles/product-details.scss'

export default function Details(props) {

  let [details, setDetails] = useState(null);
  let { id } = props.match.params;
  let [quantity, setQuantity] = useState(1);
  const authenticatedUser = useContext(AuthContext);
  
  const addToWagon = () => {
    if(authenticatedUser.username === 'Guest') {
      superagent
        .post(`https://wwwshop.herokuapp.com/products/${details._id}/save`)
        .send({ quantity: quantity })
        .then(res => {
          authenticatedUser.changeUser(res.headers.token);
          props.history.push('/wagon');
        })
    } else {
      superagent
        .post(`https://wwwshop.herokuapp.com/products/${details._id}/save`)
        .set('authorization', `Bearer ${authenticatedUser.token}`)
        .send({ quantity: quantity })
        .then(res => {
          console.log(res.body);
          props.history.push('/wagon');
        })
    }
  }

  const updateRecentlyViewed = (data) => {
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed'));
    if(!recentlyViewed) {
      let items = []
      items.push(data);
      localStorage.setItem('recentlyViewed', JSON.stringify(items));
    } else {
      for(let i = 0; i < recentlyViewed.length; i++) {
        if(recentlyViewed[i]._id === data._id) {
          return;
        } else {
          continue;
        }
      }
      recentlyViewed.push(data);
      localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }
  }

  useEffect(() => {
    superagent
      .get(`https://wwwshop.herokuapp.com/products/${id}`)
      .then(res => {
        setDetails(res.body);
        updateRecentlyViewed(res.body);
      })
  }, [id])

  const quantityChange = e => {
    e.preventDefault();
    setQuantity(e.target.value);
  }

  if (!details) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <>
      <CategoriesList />
      <div className="details">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
        <img src={details.image_url} width={200} alt={details.name}/>
        <h4>${details.price}</h4>
        <h6>Keywords: {details.keywords.toString()}</h6>
        <input type="number" defaultValue={quantity} min={1} max={15} onChange={quantityChange}></input>
        <button onClick={addToWagon}>Add to your Wagon</button>
      </div>
      <Footer />
    </>
  )
};
