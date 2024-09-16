import React, { Component } from 'react'
import './Hero.css'


class Hero extends Component {
  render() {
    return (
      <div className='min-hero'>
          <div className='hero-text'>
              <h6 className='hero-subtitle'>Welcome to Cyporg</h6>
              <div className="hero-title"><em>Browse</em> Our Popular Games Here</div>
              <div className="min-button">
                  <a href="#" style={{'padding':'15px 30px' , 'border-radius':'25px' , 'color':'#fff','background-color':'var(--color-primary)'}}>Browse Now</a>
              </div>
          </div>
      </div>
    )
  }
}


export default Hero
