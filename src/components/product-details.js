import React, { useState, useEffect } from 'react';
import superagent from 'superagent';

import '../styles/product-details.scss'


export default function Details(props) {

  let [details, setDetails] = useState(null);
  let { id } = props.match.params;
  
  const addToWagon = () => (
    superagent
      .post(`https://wwwshop.herokuapp.com/products/${details._id}/save`)
  )

  useEffect(() => {
    superagent
      .get(`https://wwwshop.herokuapp.com/products/${id}`)
      .then(res => {
        setDetails(res.body);
      })
  }, [id])

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
        <input type="number" placeholder="0" min={0} max={15}></input>
        <button onClick={addToWagon}>Add to your Wagon</button>
      </div>
    </>
  )
};
