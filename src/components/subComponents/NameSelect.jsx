import React, {useState, useEffect, useContext} from 'react';
import {PlayerContext} from '../../context/PlayerContext.jsx';

const NameSelect = () => {

    const { changeName, nextStep } = useContext(PlayerContext);
    const [name, updateName] = useState('Player One');

    return (
        <>
            <div className={'name instructions'}>
                Hello, Brave Adventurer!
                <p>
                    Please tell me your name...
                </p>
                <input type={'text'} autoFocus={true} maxLength={'16'} onChange={(event) => updateName(event.target.value)} placeholder={'16 chars or less'}/>
                <button id={'next'} onClick={ () => {
                    changeName({name});
                    nextStep(1);
                }}>Next</button>
            </div>
        </>
    );
};

export default NameSelect;
