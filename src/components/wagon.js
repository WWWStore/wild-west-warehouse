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
      <ul>
        {
          wagon.map(wagonItem => {
            if(wagonItem.quantity && wagonItem.quantity !== 0) {
              return (
                <li className="wagon-product" key={wagonItem._id}>
                  <h3 className="wagon-product name">{wagonItem.product.name}</h3>
                  <h4 className="wagon-product price">${wagonItem.product.price}</h4>
                  <img className="wagon-product image" src={wagonItem.product.image_url} width={200} alt={wagonItem.product.name}/>
                  <p className="wagon-product description">{wagonItem.product.description}</p>
                  <p className="wagon-product quantity">Quantity: {wagonItem.quantity}</p>
                  <h6 className="wagon-product keywords">Keywords: {wagonItem.product.keywords}</h6>
                  <button className="wagon-product delete" name="deleteProduct" onClick={() => deleteProduct(wagonItem.product._id)}>Delete</button>
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
