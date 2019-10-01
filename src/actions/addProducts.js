export default product => {

    return (dispatch, getState) => {
        console.log("state", getState());
        return dispatch({ type: 'ADD', product });
    };
};
