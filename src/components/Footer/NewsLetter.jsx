import React from 'react';
import './NewsLetter.css';
import SubHeading from '../SubHeading/SubHeading';

const NewsLetter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And Never miss the latest updates </p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Enter your e-mail address'/>
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter