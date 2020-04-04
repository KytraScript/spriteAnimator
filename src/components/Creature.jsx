import React, {useState, useEffect} from 'react';

const Creature = (props) => {

    //random integer generator
    const randInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    //state variables and values generic for any creature in animals.js
    const {walking, idle} = props.obj;
    const states = [walking, idle];
    const [currState, changeState] = useState(states[randInterval(0, states.length)]);
    const [currFrame, nextFrame] = useState(0);
    const [intervals] = useState({});

    //draws the next frame or resets the frame position to the first frame if next frame would be the last
    const drawStep = ( ) => {
        if(currFrame + 1 >= currState.length){
            nextFrame(0);
        } else {
            nextFrame(currFrame + 1);
        }
    };

    //polls for possible state change to simulate randomness between individual creature state changes
    const pollChange = ( ) => {
        if(intervals.y) clearTimeout(intervals.y);

        let nextState = states[randInterval(0, states.length)];

        if(currState !== nextState) {
            intervals.y = setTimeout(() => {
                nextFrame(0);
                changeState(states[randInterval(0, states.length)]);
                pollChange();
            }, 4000)
        } else {
            intervals.y = setTimeout(() => {
                pollChange();
            }, 4000)
        }
    };

    //intervals.x controls the drawStep (currently set to simulate 21 frames per second
    //contingent on animals.js being properly defined to include 7 copies of each frame string name for animations
    useEffect( () => {
        if(intervals.x) clearTimeout(intervals.x);
        intervals.x = setTimeout( () => {
            drawStep();
        }, 48);
    });

    //attempts to change the state of the animal
    useEffect( () => {
        pollChange();
    }, [currState]);

    //GET THAT HTML!
    return (
        <div className={'creature'}>
            <div className={props.obj.species + ' sprite'}>
                <img className={'creature-img'} alt={props.obj.breed + ' ' + props.obj.species} src={currState[currFrame]}/>
            </div>
        </div>
    );
};

export default Creature;
