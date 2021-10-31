import axios from "axios";

const GET_POSTS = 'GET-POSTS';
const GET_CATEGORIES = 'GET-CATEGORIES';

let localState = {
    posts: [],
    categories: []
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/'
})


export const PostReducer = (state = localState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }

        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }

        default:
            return state
    }
}


const getPostAC = data => ({type: GET_POSTS, posts: data})
const getCategoryAC = data => ({type: GET_CATEGORIES, categories: data})

export const getPostTC = (title, category) => async dispatch => {
    if (category) {
        let list = [1]
        list.map(r => {
            if (category !== r) {
                list.push(r)
                list.push(category)
            }
        })
        let a = list.slice(1)
        a.map(b => {
            let c = `&`
        })
        let response = await instance.get(`post/?category=${category}`)
        return dispatch(getPostAC(response.data))
    } else if (title) {
        let response = await instance.get(`post/?title=${title}`)
        return dispatch(getPostAC(response.data))
    } else {
        let response = await instance.get(`post/`)
        return dispatch(getPostAC(response.data))
    }
}

export const getCategoryTC = () => async dispatch => {
    let response = await instance.get('category/')
    return dispatch(getCategoryAC(response.data))
}

