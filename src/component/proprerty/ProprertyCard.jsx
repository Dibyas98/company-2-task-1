import React, { memo, useContext, useState, useEffect } from 'react';
import { FaBed, FaBath } from "react-icons/fa";
import { BsDiamond } from "react-icons/bs";
import { Heart } from 'lucide-react';
import { Data } from '../content/storeData';

function PropertyCard({ data, likep }) {
  const { handelLiked, liked } = useContext(Data);
  const [like, setLike] = useState(likep); // Initialize like state based on likep prop

  useEffect(() => {
    const fil = liked.find((ele) => ele.name === data.name);
    if (fil) {
      setLike(true);
    }
  }, [liked, data.name]);

  const handleLike = (arg) => {
    handelLiked(arg);
    setLike((prev) => !prev);
  };

  return (
    <div className='property-card'>
      <img src={data.image} alt="" />
      <div className='details'>
        <div className='price'>
          <h1>₹ {data.price}</h1>
          <Heart className='' style={like ? { fill: 'red' } : { fill: 'white' }} onClick={() => handleLike(data)} />
        </div>
        <h2>{data.name}</h2>
        <p>{data.address}</p>
        <div className='icons'>
          <span><FaBed />{data.info.bed}Beds</span>
          <span><FaBath />{data.info.bathrooms}Bath</span>
          <span><BsDiamond />{data.info.area}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(PropertyCard);
