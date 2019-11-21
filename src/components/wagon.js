import React, { useState, useEffect, useContext } from 'react';
import superagent from 'superagent';
import { AuthContext } from '../authContext';

import '../styles/wagon.scss';

export default function Wagon() {
  let [wagon, setWagon] = useState(null);
  const authenticatedUser = useContext(AuthContext);
  
  useEffect(() => {
    superagent
      .get(`https://wwwshop.herokuapp.com/wagon`)
      .set('authorization', `Bearer ${authenticatedUser.token}`)
      .then(res => {
        console.log(res.body);
        setWagon(res.body);
      })
  }, [])

  if (!wagon) {
    return (
      <>
        Wagon...
      </>
    )
  }
  return (
    <>
    <h2>Wagon</h2>
    <ul>
      {
        wagon.map(wagonItem => (
          <li className="wagon-product" key={wagonItem.product._id}>
            <h3>{wagonItem.product.name}</h3>
            <h4>${wagonItem.product.price}</h4>
            <img src={wagonItem.product.image_url} width={200} alt={wagonItem.product.name}/>
            <p>{wagonItem.product.description}</p>
            <p>{wagonItem.quantity}</p>
            <h6>Keywords: {wagonItem.product.keywords}</h6>
          </li>
        ))
      }
    </ul>
    </> 
  )
};
