import React, {useState, useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import Animals from './data/animals.js';
import Creature from './components/Creature.jsx';
import Animator from './components/Animator.jsx';
import InfoPanel from './components/InfoPanel.jsx';
import MapPanel from './components/MapPanel.jsx';

const App = () => {

    const [animals, getAnimals] = useState(Animals);
    const [wallet, updateWallet] = useState(1000);
    const [clock, toggleClock] = useState(1);
    const [engine] = useState({});

    const [plots, updatePlots] = useState([{bought: false, creature: null, climate: 'Forest', cost: 400},
        {bought: false, creature: null, climate: 'Desert', cost: 2000},
        {bought: false, creature: null, climate: 'Grassland', cost: 10000},
        {bought: false, creature: null, climate: 'Tundra', cost: 40000},
        {bought: false, creature: null, climate: 'Taiga', cost: 100000},
        {bought: false, creature: null, climate: 'Tropical', cost: 750000}
        ]);

    useEffect( () => {
        if(engine.x) clearInterval(engine.x);
        engine.x = setInterval( () => {
            toggleClock(!clock);
            console.log('tick-tock');
        },100);
    }, [clock]);

    return (
        <div className={'main-container'}>
            <div className={'navigation'}>
                <div className={'nav-wrapper'}>
                    <div className={'main-title'}>Modern React Farm</div>
                    <div className={'nav-links-wrapper'}>
                        <div className={'nav-links'}>
                            <Link to={'/'}>Game</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'game-window'}>
                <div className={'player-panel'}>
                    <div className={'creature-container'}>
                        <div className={'creature-wrapper'}>
                            {animals.map( (item, index) => {
                                return <Creature obj={item} key={index} updateWallet={updateWallet}/>
                            })}
                        </div>
                    </div>
                </div>
                <div className={'game-view'}>
                    <InfoPanel wallet={wallet}/>
                    <MapPanel plots={plots} updatePlots={updatePlots} wallet={wallet} updateWallet={updateWallet}/>
                </div>
            </div>
        </div>
    );

};

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
