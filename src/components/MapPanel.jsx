import React, {useState, useEffect, useContext} from 'react';
import Plot from './Plot.jsx';
import { PlotsContext } from '../context/PlotsContext.jsx';

const MapPanel = () => {

    const plots = useContext(PlotsContext);

    return (
        <div className={'game-map'}>
            <div className={'plots-wrapper'}>
                {plots.map( (item, index) => {
                    return <Plot obj={item} key={index}/>
                })}
            </div>
        </div>
    )
};

export default MapPanel;
