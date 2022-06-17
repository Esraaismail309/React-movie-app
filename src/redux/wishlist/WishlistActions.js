import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST } from "./WishlistTypes";

export const addToWishList = (movie) => {
    return {
        type: ADD_TO_WISHLIST,
        movie,
    };
};

export const removeFromWishList = (payload) => {
    return {
        type: DELETE_FROM_WISHLIST,
        payload
    }
}