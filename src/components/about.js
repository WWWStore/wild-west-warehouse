import React from 'react';
import Footer from './fixed-footer';
import '../styles/about.scss';

export default function About() {
  return (
    <>
    <section className="about"><h2>About Us</h2>
      <ul><div>
      <li><img src={require('../assets/andy.png')} alt="Andy"/> Andy Fiedler </li>
      <li><img src={require('../assets/Ian.png')}  alt="Ian"/> Ian Smith </li></div>
      <div>
      <li><img src={require('../assets/jon.png')}  alt="Jon"/> Jon Struve </li>
      <li><img src={require('../assets/steven.png')}  alt="Steven"/> Steven Jones </li></div>
      </ul>
    </section>
    <Footer />
    </>
  )
};
