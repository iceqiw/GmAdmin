export const counter = (state = 0, action = {}) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            console.log(state)
            return state + 1;
        case 'DECREMENT_COUNTER':
            console.log(state)
            return state - 1;
        default:
            return state
    }
}