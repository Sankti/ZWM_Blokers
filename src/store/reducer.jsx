import { data } from '../data';

const initialState = {
    strength: data.stats.baseAttribute,
    intellect: data.stats.baseAttribute,
    charisma: data.stats.baseAttribute,
    health: data.stats.baseHealth,
    money: data.stats.baseMoney,
    location: data.locations.location0,
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
    } else if (action.type === "MONEY_UP") {
        newState.money++;
    } else if (action.type === "MONEY_DOWN") {
        newState.money--;
    } else if (action.type === "GO_TO_OLD_ZWM") {
        newState.location = 0;
    } else if (action.type === "GO_TO_PG1") {
        newState.location = 1;
    } else if (action.type === "GO_TO_PARK") {
        newState.location = 2;
    } else if (action.type === "GO_TO_REAL") {
        newState.location = 3;
    } else if (action.type === "GO_TO_LO6") {
        newState.location = 4;
    } else if (action.type === "GO_TO_NEW_ZWM") {
        newState.location = 5;
    };

    return newState;
};

export default reducer;