import React, { useState, useEffect } from 'react';
import superagent from 'superagent';

export default function Carousel() {
  let [hat, setHat] = useState(null);
  let [revolver, setRevolver] = useState(null);
  let [beans, setBeans] = useState(null);

  useEffect(() => superagent.get('https://wwwshop.herokuapp.com/products/5dd4573a9639650004f485d6').then(res => setHat(res.body.image_url)), []);
  useEffect(() => superagent.get('https://wwwshop.herokuapp.com/products/5dd45d169639650004f485e3').then(res => setRevolver(res.body.image_url)), []);
  useEffect(() => superagent.get('https://wwwshop.herokuapp.com/products/5dd45d359639650004f485e6').then(res => setBeans(res.body.image_url)), []);

  return (
    <>
      <img src={hat} height={250} alt="Placeholder"></img>
      <img src={beans} height={250} alt="Placeholder2"></img>
      <img src={revolver} height={250} alt="Placeholder3"></img>
    </>
  )
};
