import React, {createContext, useReducer} from 'react';

export const PlotsContext = createContext();

export const PlotsProvider = ({children}) => {

    const plots = [{ id: 0, bought: false, creature: null, climate: 'Forest', cost: 400},
        { id: 1, bought: false, creature: null, climate: 'Desert', cost: 2000},
        { id: 2, bought: false, creature: null, climate: 'Grassland', cost: 10000},
        { id: 3, bought: false, creature: null, climate: 'Tundra', cost: 40000},
        { id: 4, bought: false, creature: null, climate: 'Taiga', cost: 100000},
        { id: 5, bought: false, creature: null, climate: 'Tropical', cost: 750000},
        { id: 6, bought: false, creature: null, climate: 'Tundra', cost: 40000},
        { id: 7, bought: false, creature: null, climate: 'Taiga', cost: 100000},
        { id: 8, bought: false, creature: null, climate: 'Tropical', cost: 750000}
    ];



    return <PlotsContext.Provider value={plots}>{children}</PlotsContext.Provider>
};

