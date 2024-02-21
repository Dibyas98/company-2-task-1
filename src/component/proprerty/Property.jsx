import React, { useContext } from 'react'
import './property.css'
import ProprertyCard from './ProprertyCard'
import data from '../../data'
import { nanoid } from 'nanoid';
import { Data } from '../content/storeData';

export default function Property() {
    const {filterData} = useContext(Data)
  return (
    <div className='proprety'>
      {filterData.length == 0?
        data.map((ele) =>{
            return <ProprertyCard key={nanoid()} data={ele}></ProprertyCard>
        }):filterData.map((ele)=>{
            return <ProprertyCard key={nanoid()} data={ele}></ProprertyCard>
        })

      }
    </div>
  )
}
