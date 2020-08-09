const initialState = {
    strength: 8,
    intellect: 8,
    charisma: 8,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'SELECT_KNIGHT') {
        newState.strength = 10;
        newState.intellect = 4;
        newState.charisma = 6;
    } else if (action.type === 'SELECT_HACKER') {
        newState.strength = 4;
        newState.intellect = 11;
        newState.charisma = 4;
    } else if (action.type === 'SELECT_RAPPER') {
        newState.strength = 4;
        newState.intellect = 6;
        newState.charisma = 10;
    }

    return newState;
};

export default reducer;