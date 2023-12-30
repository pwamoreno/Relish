import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef'/>
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Address"/>
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote'/>
            <p className='p__opensans'>Chef Senami believes in the power of a well-prepared meal and the magic that happens when quality ingredients are paired with skillful techniques.</p>
          </div>
          <p className='p__opensans'>Food has the ability to connect people, evoke emotions, and create memories. Our kitchen is a canvas where we paint flavours, and every dish is a masterpiece.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Senami Kuju</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='sign'/>
        </div>
      </div>
    </div>
  )
}

export default Chef