import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {PlayerContext} from '../../context/PlayerContext.jsx';

const AvatarSelect = () => {

    const {player, changeAvatar, nextStep} = useContext(PlayerContext);
    const [avatar, updateAvatar] = useState('../img/avatar/bard.png');
    const [choices, updateChoices] = useState([
        {img: '../img/avatar/bard.png', selected: true, id: 0},
        {img: '../img/avatar/lady.png', selected: false, id: 1},
        {img: '../img/avatar/farmer.png', selected: false, id: 2},
        {img: '../img/avatar/priestess.png', selected: false, id: 3},
        {img: '../img/avatar/elder.png', selected: false, id: 4},
        {img: '../img/avatar/smith.png', selected: false, id: 5}
    ]);

    const setSelected = (index) => {
        let choicesCopy = choices.slice();
        choicesCopy.forEach(e => e.selected = false);
        choicesCopy[index].selected = true;
        updateChoices(choicesCopy);
    };

    return (
        <>
            <div className={'avatar instructions'}>
                <h3>Welcome, mighty <span className={'emphasis-green'}>{player.name}</span>!</h3>
                <p>
                    Which of these photos is yours?
                </p>
                <div className={'avatar-wrapper'}>
                    {choices.map((obj, index) => {
                        return (<img id={obj.selected ? 'selected' : ''} src={obj.img}
                                     alt={'Avatar Choice ' + obj.id} key={index}
                                     onClick={() => {
                                         setSelected(obj.id);
                                         updateAvatar(obj.img);
                                     }}/>);
                    })}
                </div>
                <Link to={'/game'}><button id={'next'} onClick={ () => {
                        changeAvatar(avatar);
                }}>Next
                </button></Link>
            </div>
        </>
    );
};

export default AvatarSelect;
