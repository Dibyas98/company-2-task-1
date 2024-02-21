import React, { useContext, useRef, useState } from "react";
import './filter.css'
import data from "../../data";
import { Data } from "../content/storeData";

export default function Filter() {
  const {setfilterData} = useContext(Data)
  const cityRef =useRef();
  const dataRef = useRef()
  const priceRef = useRef();
  const prototypeRef = useRef();
  const handelFilter = ()=>{
    // ata.forEach((ele) =>{
    //   console.log(prototypeRef.current.value.includes(ele.type));
    // })d
    const fil = data.filter((ele)=>{
      return (ele.city.toLocaleLowerCase() === cityRef.current.value.toLocaleLowerCase() )
    })
    // console.log(fil.length);
    // const fil2 = data.filter((ele) =>{
    //   return (prototypeRef.current.value.includes(ele.type))
    // })
    // console.log(fil2.length);
  
   setfilterData(fil)
  }
  return (
    <section className="filter">
      <div>
        <label htmlFor="">Enter City</label>
        <input ref={cityRef} type="text" placeholder="All" />
      </div>
      <div>
        <label htmlFor="">Enter date</label>
        <input type="date" placeholder="All" />
      </div>
      <div>
        <label htmlFor="">Enter Price</label>
        <select required="" className="form-control">
          <option value="0-3000">0-3000</option>
          <option value="0-500">Rs. 0-500</option>
          <option value="500-1000">Rs. 500-1000</option>
          <option value="1000-1500">Rs. 1000-1500</option>
          <option value="1500-2000">Rs. 1500-2000</option>
          <option value="2000-2500">Rs. 2000-2500</option>
          <option value="2500-3000">Rs. 2500-3000</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Property type</label>
        <select ref={prototypeRef} required="" className="form-control">
          <option value={'All'}>All</option>
          <option value={'All house'}>house</option>
          <option value={'All pg'}>pg</option>
          <option value={'All farm-house'}>farm-house</option>
          <option value={'All villa'}>villa</option>
          <option value={'All hotel'}>hotel</option>
          <option value={'All oyo'}>oyo</option>
        </select>
      </div>
      <button onClick={handelFilter}>submitt</button>
    </section>
  );
}
