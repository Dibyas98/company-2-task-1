import React, { useState } from 'react'
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BsDiamond } from "react-icons/bs";
import { Heart } from 'lucide-react';

export default function ProprertyCard({data}) {
    const [like,setLike] = useState(false)
    const handelLike = ()=>{
        setLike(!like)
        
    }
  return (
    <div className='property-card'>
      <img src={data.image} alt="" />
      <div className='details'>
        <div className='price'>
            <h1>₹ {data.price}</h1>
            <Heart className='' style={like?{fill:'red'}:{fill:'white'}} onClick={handelLike}></Heart>
        </div>
        <h2>{data.name}</h2>
        <p>{data.address}</p>
        <div className='icons'>
            <span><FaBed></FaBed>{data.info.bed}Beds</span>
            <span><FaBath></FaBath>{data.info.bathrooms}Bath</span>
            <span><BsDiamond></BsDiamond>{data.info.area}</span>
        </div>
      </div>
    </div>
  )
}
