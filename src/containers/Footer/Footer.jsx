import React from 'react';
import './Footer.css';
import { FooterOverlay, NewsLetter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { images } from '../../constants';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <NewsLetter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>Harrow The Ninth Boulevard, Victoria Island, Lagos.</p>
          <p className='p__opensans'>+234 8101234567</p>
          <p className='p__opensans'>+234 9012345678</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.relishFooter} alt='footer logo'/>
          <p className='p__opensans'>The best things are those that come in little packages.</p>
          <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}}/>
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday - Friday</p>
          <p className='p__opensans'>10:00am - 10:00pm</p>
          <p className='p__opensans'>Saturday - Sunday</p>
          <p className='p__opensans'>10:00am - 08:00pm</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>&#169;2023 Relish. All rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer