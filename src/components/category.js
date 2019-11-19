import React, { useState, useEffect } from 'react';
import superagent from 'superagent';

export default function Category(props) {
  let [category, setCategory] = useState({});
  const { slug } = props.match.params;

  useEffect(() => {

    superagent
      .get(`https://wwwshop.herokuapp.com/categories/${slug}`)
      .then(res => {
        setCategory(res);
      })
  }, [slug])

  return (
    <>
      <h1>{slug}</h1>
    </>
  )
};
