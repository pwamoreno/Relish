import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour.'/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0'}}>Relish is a place where culinary artistry meets a passion for exceptional dining experiences. We have been a culinary haven, blending flavours, innovation, and a commitment to excellence.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img'/>
      </div>
    </div>
  )
}

export default Header