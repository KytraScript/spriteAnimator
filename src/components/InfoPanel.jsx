import React, {useState, useEffect, useContext} from 'react';
import { PlayerContext } from '../context/PlayerContext.jsx';

const InfoPanel = (props) => {

    const { player, subWallet, addWallet } = useContext(PlayerContext);

    return (
        <div className={'info-panel'}>
            <div className={'info-image'}>
                <img src={player.img} alt={'Player One'}/>
            </div>
            <div className={'info-dialog'}>
                <span className={'stats'}>Player: {player.name}</span>
                <span className={'stats'}>Wallet: {player.wallet}</span>
            </div>
        </div>
    )
};

export default InfoPanel;
