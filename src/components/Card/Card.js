import React from 'react'
import './Card.css'
import {FaStar , FaDownload} from 'react-icons/fa'

const Card = (props) => {
  return (
    <div className='most-popular-item'>
    <div className='card-wrapper'>
        <img className='item-img' src={props.image} alt='' />

        <div className='item-content'>
        <h4 className='item-title'>
            {props.title}  <br />
            <span>{props.category}</span>
        </h4>
        <ul>
          <li><span style={{'color' : 'var(--rate-icon-color)'}}><FaStar /> </span><span>{props.rate}</span></li>
          <li><span style={{'color' : 'var(--download-icon-color )'}}><FaDownload /> </span><span>{props.download}</span></li>
        </ul>
    </div>
    </div>
</div>
  )
}

export default Card
