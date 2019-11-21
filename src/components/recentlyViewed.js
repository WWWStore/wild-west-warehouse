import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/recentlyViewed.scss';

export default function RecentlyViewed() {
  if(localStorage.getItem('recentlyViewed')) {
    return (
      <ul className="recentlyViewed">
        {JSON.parse(localStorage.getItem('recentlyViewed')).map(product => (
          <li key={product._id}><Link to={`/products/${product._id}`}>
          <h4 className="product-name">{product.name}</h4>
          <img className="product-image" src={product.image_url} alt={product.name}/>
          <h5 className="product-price">${product.price}</h5>
        </Link></li>
      ))}
      </ul>
    )
  } else {
    return null;
  }
}