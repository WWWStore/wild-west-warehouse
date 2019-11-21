import React, { useState, useEffect, useContext } from 'react';
import superagent from 'superagent';
import { AuthContext } from '../authContext';

import '../styles/product-details.scss'


export default function Details(props) {

  let [details, setDetails] = useState(null);
  let { id } = props.match.params;
  let [quantity, setQuantity] = useState(0);
  const authenticatedUser = useContext(AuthContext);
  
  const addToWagon = () => (
    superagent
      .post(`https://wwwshop.herokuapp.com/products/${details._id}/save`)
      .set('authorization', `Bearer ${authenticatedUser.token}`)
      .then(res => {
        console.log(res.body);
      })
    )

  useEffect(() => {
    superagent
      .get(`https://wwwshop.herokuapp.com/products/${id}`)
      .then(res => {
        setDetails(res.body);
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
      <div className="details">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
        <img src={details.image_url} width={200} alt={details.name}/>
        <h4>${details.price}</h4>
        <h6>Keywords: {details.keywords.toString()}</h6>
        <input type="number" defaultValue={quantity} min={0} max={15} onChange={quantityChange}></input>
        <button onClick={addToWagon}>Add to your Wagon</button>
      </div>
    </>
  )
};
