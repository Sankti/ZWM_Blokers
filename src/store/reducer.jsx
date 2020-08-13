import { data } from '../data';

const initialState = {
    strength: data.stats.baseAttribute,
    intellect: data.stats.baseAttribute,
    charisma: data.stats.baseAttribute,
    health: data.stats.baseHealth,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'SELECT_KNIGHT') {
        newState.strength = data.classes.knight.strength;
        newState.intellect = data.classes.knight.intellect;
        newState.charisma = data.classes.knight.charisma;
    } else if (action.type === 'SELECT_HACKER') {
        newState.strength = data.classes.hacker.strength;
        newState.intellect = data.classes.hacker.intellect;
        newState.charisma = data.classes.hacker.charisma;
    } else if (action.type === 'SELECT_RAPPER') {
        newState.strength = data.classes.rapper.strength;
        newState.intellect = data.classes.rapper.intellect;
        newState.charisma = data.classes.rapper.charisma;
    } else if (action.type === 'HEALTH_UP') {
        newState.health++;
    } else if (action.type === 'HEALTH_DOWN') {
        newState.health--;
    };

    return newState;
};

export default reducer;