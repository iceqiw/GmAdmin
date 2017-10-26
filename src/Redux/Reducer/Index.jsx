export const counter = (state = 0, action = {}) => {
    let data = {};
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            console.log(state)
            return state + 1;
        case 'DECREMENT_COUNTER':
            console.log(state)
            return state - 1;
        case 'DECREMENT_COUNTER2':
            data = action.payload;
            console.log(data)
            return state - 1;
        default:
            console.log(state)
            return state
    }
}