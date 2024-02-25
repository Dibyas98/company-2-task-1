import React, { memo, useContext } from 'react';
import './property.css';
import ProprertyCard from './ProprertyCard'; // Corrected import name
import data from '../../data';
import { Data } from '../content/storeData';

function Property() {
    const { filterData } = useContext(Data);

    return (
        <div className='proprety'>
            {filterData.length === 0 ?
                data.map((ele) => (
                    <ProprertyCard key={ele.id} data={ele} />
                )) :
                filterData.map((ele) => (
                    <PropertyCard key={ele.id} data={ele} />
                ))
            }
        </div>
    );
}

export default memo(Property);
