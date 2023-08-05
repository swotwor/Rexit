import { createStore } from 'redux';

const initialState = {
    buyList: [
        {
            id: 1,
            peas: '4',
            sesame: '15',
            wheat: '61',
            corn: '20',
            weight: '1.5',
            cost: '81.50',
        },
        {
            id: 2,
            peas: '14',
            sesame: '19',
            wheat: '51',
            corn: '16',
            weight: '0.5',
            cost: '28.50',
        },
        {
            id: 3,
            peas: '5',
            sesame: '14',
            wheat: '65',
            corn: '16',
            weight: '0.66',
            cost: '33.00',
        },
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CRACKER': 
            return {...state, buyList: [...state.buyList, action.payload]}
        case 'REMOVE_CRACKER':
            return {...state, buyList: [...state.buyList.filter(item => item.id != action.payload)]}
        default:
            return state;
    }
};