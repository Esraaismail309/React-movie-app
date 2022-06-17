import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST } from "./WishlistTypes";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { RiInformationLine } from "react-icons/ri";


const initialState = {
    wishList: JSON.parse(localStorage.getItem('movie')) || [],
    // isFound: true
}
const WishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:

            const newBook = { ...action.movie };
            state = {
                ...state,
                wishList: [...state.wishList, newBook],
                c: console.log(state.wishList),
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


// const WishListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_WISHLIST:
//             // state.wishList = [action.movie]
//             return {
//                 ...state,
//                 isFound: true,
//                 wishList: [...state.wishList, action.movie],
//                 c: console.log(state)
//             }


//         default:
//             return state

//     }
// }
export default WishListReducer