import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POSTS, ADD_POST } from "../types"

const initialState = {
    allposts: [],
    bookedPosts: [],
    loading: true
}
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
            case LOAD_POSTS:
                return {
                    ...state, 
                    allposts: action.payload, 
                    bookedPosts: action.payload.filter(post => post.booked),
                    loading: false
                }
            case ADD_POST:
                return {
                    ...state, 
                    allposts: [{...action.payload}, ...state.allposts]
                }
            case REMOVE_POSTS:
                return {
                    ...state, 
                    allposts: state.allposts.filter(post => post.id !== action.payload), 
                    bookedPosts: state.bookedPosts.filter(post => post.id !== action.payload)}
            case TOGGLE_BOOKED:
                const allPosts = state.allposts.map(post => {
                    if (post.id === action.payload) {
                        post.booked = !post.booked
                    } 
                    return post
                })
                return {...state, allPosts, bookedPosts: state.allposts.filter(post => post.booked)}
        default:
            return state
    }
}