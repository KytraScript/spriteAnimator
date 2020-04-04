import React, {useState, useEffect} from 'react';
import Animals from '../data/animals';

const InfoPanel = (props) => {

    return (
        <div className={'info-panel'}>
            <div className={'info-image'}>

            </div>
            <div className={'info-dialog'}>
                Wallet: {props.wallet}
            </div>
        </div>
    )
};

export default InfoPanel;
