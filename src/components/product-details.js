import React, { useState, useEffect } from 'react';
import superagent from 'superagent';

import '../styles/product-details.scss'


export default function Details(props) {

  const addToWagon = () => (
    (`https://wwwshop.herokuapp.com/products/${id}/save`)
  )

  let [details, setDetails] = useState(null);
  let { id } = props.match.params;
  
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
        Details...
      </>
    )
  }

  return (
    <>
      <div className="details">
      <h3>{details.name}</h3>
      <h4>${details.price}</h4>
      <img src={details.image_url} width={200} alt={details.name}/>
      <p>{details.description}</p>
      <h6>Keywords: {details.keywords.toString()}</h6>
      <div className="click">
       <input type="number" placeholder="0" max={15}></input>
      <button onClick={addToWagon}>Add to your Wagon</button>
      </div>
      </div>
    </>
  )
};
