import React, {useState, useEffect, useMemo, useContext, createContext} from 'react';
import ReactDOM from 'react-dom';
import PlayerSetup from './components/PlayerSetup.jsx';
import Game from './components/Game.jsx';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import {PlayerProvider} from './context/PlayerContext.jsx';
import {PlotsProvider} from './context/PlotsContext.jsx';

const App = () => {

    const [clock, toggleClock] = useState(1);
    const [engine] = useState({});

    useEffect(() => {
        if (engine.x) clearInterval(engine.x);
        engine.x = setInterval(() => {
            toggleClock(!clock);
            console.log('tick-tock');
        }, 100);
    }, [clock]);

    return (
        <div className={'main-container'}>
            <div className={'navigation'}>
                <div className={'nav-wrapper'}>
                    <div className={'main-title'}>Flora and Fauna</div>
                    <div className={'nav-links-wrapper'}>
                        <div className={'nav-links'}>

                        </div>
                    </div>
                </div>
            </div>
            <div className={'game-window'}>
                <Switch>
                    <Route exact path={'/'}>
                        <PlayerSetup/>
                    </Route>
                    <Route path={'/game'}>
                        <Game/>
                    </Route>
                </Switch>
            </div>
        </div>
    );

};

ReactDOM.render(
    <PlotsProvider>
        <PlayerProvider>
            <HashRouter>
                <App/>
            </HashRouter>
        </PlayerProvider>
    </PlotsProvider>, document.getElementById('root'));
