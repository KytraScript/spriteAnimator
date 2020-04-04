import React, {useState, useEffect} from 'react';

const Plot = (props) => {

    const purchase = () => {
        if (!props.obj.bought) {
            props.obj.bought = true;
            props.updateWallet(props.wallet - props.obj.cost);
        } else {
            console.log('you have already purchased this plot');
        }
    };

    return (
        <div className={'plot-container'}>
            <div className={props.obj.bought ? 'plot' : 'plot locked'} onClick={purchase}>
                {props.obj.creature ? '' : ''}
            </div>
            <div className={'plot-info'}>
                <div>Biome: {props.obj.climate}</div>
                <div>Cost: {props.obj.cost}</div>
            </div>
        </div>
    );
};

export default Plot;
