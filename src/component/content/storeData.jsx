import React, { createContext, useState } from 'react'
import data from '../../data';
export const Data = createContext();
export default function StoreData({children}) {
    const [filterData,setfilterData] = useState([])
    const [liked,setLiked] = useState([])

    const handelLiked = (arg) => {
      const alreadyLiked = liked.find((ele) => ele.name === arg.name);
      if (!alreadyLiked) {
          // If not already liked, add it to the liked array
              setLiked((prevLiked) => [...prevLiked, arg]);
      }else{
        const likedItem = liked.filter((ele) => ele.name != arg.name);
        setLiked(likedItem)
      }
  };
  return (
    <Data.Provider value={{filterData,setfilterData,handelLiked,liked}}>
        {children}
    </Data.Provider>
  )
}
