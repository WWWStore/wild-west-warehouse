import React, { useState, useEffect, useContext } from 'react';
import superagent from 'superagent';
import { AuthContext } from '../authContext';
import Footer from './fixed-footer';
import '../styles/wagon.scss';

export default function Wagon() {
  let [wagon, setWagon] = useState(null);
  const authenticatedUser = useContext(AuthContext);
  
  useEffect(() => {
    if (!authenticatedUser.token)
      return;

    superagent
      .get(`https://wwwshop.herokuapp.com/wagon`)
      .set('authorization', `Bearer ${authenticatedUser.token}`)
      .then(res => {
        setWagon(res.body);
      })
  }, [authenticatedUser.token])

  const deleteProduct = productId => {
    superagent
      .delete(`https://wwwshop.herokuapp.com/wagon/${productId}`)
      .set('authorization', `Bearer ${authenticatedUser.token}`)
      .then(res => {
        setWagon(res.body)
      })
  }

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
      <h2>Wagon</h2>
      <ul className="product-list">
        {
          wagon.map(wagonItem => {
            if(wagonItem.quantity && wagonItem.quantity !== 0) {
              return (
                <li className="wagon-product" key={wagonItem._id}>
                  <img className="wagon-product image" src={wagonItem.product.image_url} alt={wagonItem.product.name}/>
                  <div className="wagon-product full-details">
                    <h3 className="wagon-product name">{wagonItem.product.name}</h3>
                    <h4 className="wagon-product price">${wagonItem.product.price}</h4>
                    <p className="wagon-product quantity">Quantity: {wagonItem.quantity}</p>
                    <button className="wagon-product delete" name="deleteProduct" onClick={() => deleteProduct(wagonItem.product._id)}>Delete</button>
                  </div>
                </li>
              )
            }
            return null;
          })
        }
      </ul>
      <Footer />
    </> 
  )
};
