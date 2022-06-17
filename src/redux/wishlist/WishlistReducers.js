import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST } from "./WishlistTypes";

const initialState = {
    wishList: JSON.parse(localStorage.getItem('movie')) || [],
}
const WishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const newBook = { ...action.movie };
            state = {
                ...state,
                wishList: [...state.wishList, newBook],
            };
            localStorage.setItem('movie', JSON.stringify(state.wishList))
            return state

        case DELETE_FROM_WISHLIST:
            state = {
                ...state,
                wishList: [...state.wishList.filter((item) => action.payload.id !== item.id)],
            }
            localStorage.setItem('movie', JSON.stringify(state.wishList))
            return state
        default:
            return state
    }
}


export default WishListReducer