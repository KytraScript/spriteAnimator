import React, {useState, useEffect, useContext} from 'react';
import NameSelect from './subComponents/NameSelect.jsx';
import AvatarSelect from './subComponents/AvatarSelect.jsx';
import {PlayerContext} from '../context/PlayerContext.jsx';

const PlayerSetup = () => {

    const { player } = useContext(PlayerContext);

    return (
        <div className={'player-setup'}>
            {player.step === 0 ? <NameSelect/> : ''}
            {player.step === 1 ? <AvatarSelect/> : ''}
        </div>
    );
};

export default PlayerSetup;
