import React, { createContext, useState } from 'react'
export const Data = createContext();
export default function StoreData({children}) {
    const [filterData,setfilterData] = useState([])
    const [liked,setLiked] = useState([])
  return (
    <Data.Provider value={{filterData,setfilterData,setLiked,liked}}>
        {children}
    </Data.Provider>
  )
}
