import * as actionTypes from './actions';

const initialState = {
    items: []
}

//doing it this way takes away any problems with mis-spellings
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NAME:
            return {
            ...state,
            items: action.type.value
            }
        
         }
    return state;
}

export default reducer;