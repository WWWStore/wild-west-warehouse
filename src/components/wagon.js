import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import Footer from './fixed-footer';
import '../styles/wagon.scss';


export default function Wagon() {
  let [wagon, setWagon] = useState(null);
  
  useEffect(() => {
    superagent
      .get(`https://wwwshop.herokuapp.com/wagon`)
      .then(res => {
        setWagon(res.body.results);
      })
  }, [])

  if (!wagon) {
    return (
      <>
        Wagon...
        <Footer />
      </>
    )
  }
  return (
    <>
    <h2>Wagon Shopping</h2>
      <h3>{wagon.name}</h3>
      <h4>${wagon.price}</h4>
      <img src={wagon.image_url} width={200} alt={wagon.name}/>
      <p>{wagon.description}</p>
      <p>{wagon.quantity}</p>
      <h6>Keywords: {wagon.keywords.toString()}</h6>
      <Footer />
    </> 
  )
};
