import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeaderBody.css';
import './img1.jpg';
import './video1.mp4';



function HeaderBody() {
    return (
      <div className='header-container'>
        {/* <video src='./video1.mp4' autoPlay loop muted /> */}
        <h1>VISIT BIHAR</h1>
        <p>What are you waiting for?</p> 
      <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}
export default HeaderBody;


