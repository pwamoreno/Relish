import React from 'react';
import './SpecialMenu.css';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='A Menu that fits your palette.'/>
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Asian Fusion Cuisine</p>
          <div className='app__specialMenu_menu_items'>
            {data.fusion.map((meal, index) => (
              <MenuItem key={meal.title + index} title={meal.title} price={meal.price} tags={meal.tags}/>
            ))}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt='menu img'/>
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Contemporary Cuisine</p>
          <div className='app__specialMenu_menu_items'>
            {data.contemporary.map((meal, index) => (
              <MenuItem key={meal.title + index} title={meal.title} price={meal.price} tags={meal.tags}/>
            ))}
          </div>
        </div>
        
      </div>

      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu