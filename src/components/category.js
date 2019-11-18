import React, { useState } from 'react';
import superagent from 'superagent';

export default function Category(props) {
  let [category, setCategory] = useState({});

  const componentDidMount = () => {
    const { category } = props.match.params

    return superagent
      .get(`https://dashboard.heroku.com/apps/wwwshop/category/${category}`)
      .then(res => {
        setCategory(res);
      })
  }

  return (
    <>
      <h1>{category}</h1>
    </>
  )
};
