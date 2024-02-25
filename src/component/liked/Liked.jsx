import React, { useContext } from 'react'
import { Data } from '../content/storeData'
import { nanoid } from 'nanoid'
import PropertyCard from '../proprerty/ProprertyCard'

export default function Liked() {
    const {liked} = useContext(Data)
  return (
    <div className='liked'>
      {liked.length > 0?
        liked.map((ele) =>{
            return <PropertyCard key={nanoid()} data={ele} likep={true}></PropertyCard>
        }):<h1>You Have not liked yet</h1>

      }
    </div>
  )
}
