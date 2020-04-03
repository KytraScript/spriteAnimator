import React, {useState, useEffect} from 'react';

const Home = () => {

    const walkingHorse = ['../img/horse1_33.png', '../img/horse1_34.png'];
    const idleHorse = ['../img/horse1_27.png'];
    const horseStates = [walkingHorse, idleHorse];
    const [currFrame, updateFrame] = useState(0);
    const [currState, updateState] = useState(horseStates[1]);

    const randInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    useEffect(() => {
        setInterval(() => {
            updateFrame(0);
            updateState(horseStates[randInterval(0, horseStates.length)]);
        }, 2000);
    });

    useEffect(() => {
        if (window.x) clearInterval(window.x);
        window.x = setInterval(() => {
            if (currFrame + 1 >= currState.length) {
                updateFrame(0);
            } else {
                updateFrame(currFrame + 1);
            }
        }, 500);
    });

    return (
        <div className={'home-container'}>
            <div className={'horse-sprite'}><img id={'horse'} src={currState[currFrame]}/></div>
        </div>
    );
};

export default Home;
