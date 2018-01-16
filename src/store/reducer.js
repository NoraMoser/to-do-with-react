const initialState = {
    items: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_NAME') {
        return {
            items: state.items.value
        }
    }
    return state;
}

export default reducer;