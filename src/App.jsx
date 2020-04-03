import React, {useState, useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home.jsx';

const App = () => {

    return (
        <div className={'main-container'}>
            <div className={'navigation'}>
                <div className={'nav-wrapper'}>
                    <div className={'main-title'}>New Project</div>
                    <div className={'nav-links-wrapper'}>
                        <div className={'nav-links'}>
                            <Link to={'/'}>Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'content-container'}>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </div>
    );

};

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
