import React from 'react';
import Footer from './footer';
import '../styles/about.scss';

export default function About() {
  return (
    <>
    <section className="about"><h2>About Us</h2>
      <ul><div>
      <li><img src="https://via.placeholder.com/250x250.jpg" alt="Andy"/> Andy Fiedler </li>
      <li><img src="https://via.placeholder.com/250x250.jpg" alt="Ian"/> Ian Smith </li></div>
      <div>
      <li><img src="https://via.placeholder.com/250x250.jpg" alt="Jon"/> Jon Struve </li>
      <li><img src="https://via.placeholder.com/250x250.jpg" alt="Steven"/> Steven Jones </li></div>
      </ul>
    </section>
    <Footer />
    </>
  )
};
