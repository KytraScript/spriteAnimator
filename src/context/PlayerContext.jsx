import React, {createContext, useReducer, useCallback} from 'react';

export const PlayerContext = createContext();

const initialState = {
    step: 0,
    name: 'Player One',
    img: '',
    wallet: 500
};

const WALLET_ADD = 'WALLET_ADD';
const WALLET_SUB = 'WALLET_SUB';
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_AVATAR = 'CHANGE_AVATAR';
const NEXT_STEP = 'NEXT_STEP';

const reducer = (state = {}, action) => {
    if (action.type === WALLET_ADD) {
        return { ...state, ...action.payload };
    }

    if (action.type === WALLET_SUB) {
        return { ...state, ...action.payload };
    }

    if (action.type === CHANGE_NAME){
        return { ...state, ...action.payload }
    }

    if (action.type === CHANGE_AVATAR){
        return { ...state, ...action.payload}
    }

    if (action.type === NEXT_STEP){
        return { ...state, ...action.payload}
    }

    return state;
};

export const PlayerProvider = ({children}) => {

    const [player, dispatch] = useReducer(reducer, initialState);

    const addWallet =
        ({ cost }) => {
            dispatch({
                type: WALLET_ADD,
                payload: {
                    wallet: player.wallet + cost
                }
            });
        };

    const subWallet =
        ({ cost }) => {
            dispatch({
                type: WALLET_SUB,
                payload: {
                    wallet: player.wallet - cost
                }
            });
        };

    const changeName =
        ({ name }) => {
            dispatch({
                type: CHANGE_NAME,
                payload: {
                    name: name
                }
            });
        };

    const changeAvatar =
        ( img ) => {
            dispatch({
                type: CHANGE_AVATAR,
                payload: {
                    img: img
                }
            });
        };

    const nextStep =
        (step) => {
            dispatch({
                type: NEXT_STEP,
                payload: {
                    step: step
                }
            });
        };

    return <PlayerContext.Provider value={{ player, addWallet, subWallet, changeAvatar, changeName, nextStep }}>{children}</PlayerContext.Provider>
};

