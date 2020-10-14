export const initialState = {
    basket: [],
};

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        //logic for adding and removing  items  to basket
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            return { state };
        default:
            return state;
    }
}

export default reducer;