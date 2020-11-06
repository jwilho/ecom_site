export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        //logic for adding items  to basket
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        //logic for removing items  to basket
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
                );

            if (index >= 0) {
                // item exist in basket, remove it..
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    "cant remove product as its not in basket"
                );
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;