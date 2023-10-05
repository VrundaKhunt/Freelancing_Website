import React, { useState } from 'react'
import "./GigCard.scss"
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'



function GigCard({item}) {

    const [color, setColor] = useState(false)

    const { isLoading, error, data } = useQuery({
        queryKey: [`${item.userId}`],
        queryFn: () =>
          newRequest.get(`/users/${item.userId}`)
          .then((res)=>{
            return res.data
          }),
      })

  return (
 
    <div className="gigCard">
        <Link to={`/gig/${item._id}`} className="link">
        <img src={item.cover} alt="" />
        <div className="info">
            {isLoading ? "loading" : error ? "Something went wrong" :
            (<div className="user">
                <img src={data.img || "/img/noavatar.jpg"} alt="" />
                <span>{data.username}</span>
            </div>)}
            <p>{item.desc}</p>
            <div className='star'>
                <img src="./img/star.png" alt="" />
                <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)}</span>
            </div>
        </div>
        <hr/>
        </Link>
        <div className="details">
            <img onClick={()=>setColor(!color)} src= {color==false ?"./img/heart.png":"./img/redheart.png"} />
            <div className="price">
                <span>STARTING AT</span>
                <h2>${item.price}</h2>
            </div>
        </div>
    </div>
   
  )
}

export default GigCard