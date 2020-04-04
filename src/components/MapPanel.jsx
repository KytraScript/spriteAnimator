import React, {useState, useEffect} from 'react';
import Plot from './Plot.jsx';

const MapPanel = (props) => {

    return (
        <div className={'game-map'}>
            <div className={'plots-wrapper'}>
                {props.plots.map( (item, index) => {
                    return <Plot obj={item} key={index} updatePlots={props.updatePlots} wallet={props.wallet} updateWallet={props.updateWallet}/>
                })}
            </div>
        </div>
    )
};

export default MapPanel;
