import React, {useState, useEffect, useContext} from 'react';
import {PlayerContext} from '../context/PlayerContext.jsx';
import Animals from '../data/animals.js';
import Creature from './Creature.jsx';
import InfoPanel from './InfoPanel.jsx';
import MapPanel from './MapPanel.jsx';

const Game = () => {

    const [animals, getAnimals] = useState(Animals);
    const { player } = useContext(PlayerContext);
    const [visible, toggleVisible] = useState(false);

    return (
        <>
            <div className={'player-panel'}>
                <div className={'player-avatar'}>
                    <img src={player.img} alt={'Player Avatar'}
                         onMouseEnter={ () =>{ toggleVisible(true)}} onMouseLeave={ () =>{ toggleVisible(false)}}
                         />
                    <div className={visible ? 'player-info flex-column' : 'player-info hidden'}>
                        <span className={'stats'}>Name: <span className={'emphasis-green'}>{player.name}</span></span>
                        <span className={'stats'}>Wallet: {player.wallet}</span>
                    </div>
                </div>
                <div className={'creature-container'}>
                    <div className={'creature-wrapper'}>
                        {animals.map((item, index) => {
                            return <Creature obj={item} key={index}/>;
                        })}
                    </div>
                </div>
            </div>
            <div className={'game-view'}>
                {/*<InfoPanel/>*/}
                <MapPanel/>
            </div>
            </>
    );
};

export default Game;
