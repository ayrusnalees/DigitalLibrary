import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import { Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
  return (
    <section className='about'>
    <Navbar/>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookArena's Library</h2>
            <p className='fs-17'>Digital libraries are Internet sites consecrated to the creation and preservation of electronic book collections and holdings of other kinds of materials, without the need for end users to purchase the materials they want to consult and read. Creating and preserving these collections involves the participation of a large number of intermediate institutions, which is part of what makes digital libraries so interesting.Among the participants are those institutions that secure from the publishers the rights to transform or distribute their materials in digital formats, and libraries that purchase the rights for the members of their institutions to access these materials while respecting certain conditions. </p>
            <p className='fs-17'>Among the most noteworthy of these digital libraries are the Project Gutenberg, the World Digital Library and the Europeana Library. The World Digital Library was created by the U.S. Library of Congress and inaugurated on 21 April 2009; the Europeana digital library, inaugurated on 20 November 2008, is an open access library that serves Europe. There are digital library projects sponsored by national libraries, among which the Miguel de Cervantes Digital Library [Biblioteca Virtual Miguel de Cervantes] of the Biblioteca Nacional de España, the Gallica digital library of the Bibliothèque Nationale de France and other such projects stand out.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About