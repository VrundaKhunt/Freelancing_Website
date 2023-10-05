import React from 'react'
import "./CatCard.scss"
import { Link } from 'react-router-dom'

function CatCard({item}) {
  return (
    <Link to="/gigs?cat=design">
    <div className="catCard">
       <img src={item.img} alt=''/>
       <div className="textContent">
       <span className='desc'>{item.title}</span>
       <span className='title'>{item.desc}</span>
       </div>
    </div>
    </Link>
  )

}

export default CatCard