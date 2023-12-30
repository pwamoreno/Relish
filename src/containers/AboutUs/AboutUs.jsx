import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.mark} alt='relish logomark'/>
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
          <p className='p__opensans'>At Relish, we pride ourselves on creating a welcoming ambiance where every guest feels like a cherished part of our extended family. Our team is driven by a shared passion for crafting unforgettable meals that tantalize the taste buds and leave a lasting impression.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_fish'>
          <img src={images.fish} alt='about-fish'/>
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
          <p className='p__opensans'>Our journey began many years ago when Chef Senami envisioned a space where gastronomy becomes an immersive experience. Over the years, we've evolved, embracing culinary trends while staying true to our roots. Each dish tells a story, a narrative of our dedication to quality, freshness, and a genuine love for food.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs