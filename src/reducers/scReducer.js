export default (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.product];
        case 'CLEAR':
            return [];
        default:
            return state;
    }
}