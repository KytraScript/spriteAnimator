import React, {useState, useEffect, useContext, useReducer} from 'react';
import { PlayerContext } from '../context/PlayerContext.jsx';

const Plot = ( {obj} ) => {

    const { player, subWallet, addWallet } = useContext(PlayerContext);

    const [cost] = useState(obj.cost);

    const purchase = () => {
        subWallet({cost})
    };

    return (
        <div className={'plot-container'}>
            <div className={obj.bought ? 'plot' : 'plot locked'} onClick={purchase}>
                {obj.creature ? '' : ''}
            </div>
            <div className={'plot-info'}>
                <div>Biome: {obj.climate}</div>
                <div>Cost: {obj.cost}</div>
            </div>
        </div>
    );
};

export default Plot;
