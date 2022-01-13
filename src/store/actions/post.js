import { DB } from "../../db";
import * as FileSystem from 'expo-file-system';
import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POSTS, ADD_POST } from "../types";

export const loadPosts =  () => {
    return async dispatch => {
        const posts = await DB.getPosts()
        dispatch({type: LOAD_POSTS, payload: posts})
    }
}
export const toggleBooked = (post) => async dispatch => {
    try {
        await DB.updatePost(post)
    } catch (error) {
        console.log(error)
    }
    dispatch({type: TOGGLE_BOOKED, payload: post.id})
}
export const removePost = (id) =>  async dispatch => {
    try {
         await DB.removePost(id)
    } catch (error) {
        console.log(error)
    }
    dispatch({type: REMOVE_POSTS, payload: id})
}
export const addPost = (post) => {
    return async dispatch => {
        const fileName = post.img.split('/').pop()
        const newPath = FileSystem.documentDirectory + fileName
        try {
            await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
        } catch (error) {
            console.log(error)
        }
        const payload = {...post, img: newPath}
        try {
            const id = await DB.createPost(payload)
            payload.id = id
        } catch (error) {
            console.log(error)
        }
        dispatch({type: ADD_POST, payload })
    }
}