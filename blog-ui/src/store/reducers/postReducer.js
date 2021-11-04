import axios from "axios";

const GET_POSTS = 'GET-POSTS';
const GET_POST = 'GET-POST';
const GET_CATEGORIES = 'GET-CATEGORIES';

let localState = {
    posts: [],
    categories: [],
    post: [],
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

        case GET_POST:
            return {
                ...state,
                post: action.post
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


const getPostsAC = data => ({type: GET_POSTS, posts: data})
const getPostAC = data => ({type: GET_POST, post: data})
const getCategoryAC = data => ({type: GET_CATEGORIES, categories: data})

export const getPostTC = (title, category) => async dispatch => {
    if (category) {
        let response = await instance.get(`post/?category=${category}`)
        return dispatch(getPostsAC(response.data))
    } else if (title) {
        let response = await instance.get(`post/?title=${title}`)
        return dispatch(getPostsAC(response.data))
    } else {
        let response = await instance.get(`post/`)
        return dispatch(getPostsAC(response.data))
    }
}

export const getPostByIdTC = id => async dispatch => {
    let response = await instance.get(`post/${id}/`)
    return dispatch(getPostAC(response.data))
}

export const getCategoryTC = () => async dispatch => {
    let response = await instance.get('category/')
    return dispatch(getCategoryAC(response.data))
}

export const createCommentTC = (text, profile, token, id, post) => async dispatch => {
    let postData = {
        "text": text,
        "profile": profile
    }
    let headers = {'Authorization': `Bearer ${token}`}
    let response =
        await axios.post('http://127.0.0.1:8000/api/comment/create/',
        postData,
        {headers: headers}
        )
    setTimeout(async() => {
        if (post.length === 0) {
            let data = {
                "comment": [response.data.id]
            }
            let patchResponse =
                await axios.patch(`http://127.0.0.1:8000/api/post/${id}/update`,
                    data,
                    {headers: headers}
                )
            setTimeout(async () => {
                let rps = await instance.get(`post/${id}/`)
                return dispatch(getPostAC(rps.data))
            })
        } else {
            let data = []
            let comment = {
                "comment": data
            }
            post.map( p => {
                return data.push(p.id, response.data.id)
            })
            let patchResponse =
                await axios.patch(`http://127.0.0.1:8000/api/post/${id}/update`,
                    comment,
                    {headers: headers}
                )
            setTimeout(async () => {
                let rps = await instance.get(`post/${id}/`)
                return dispatch(getPostAC(rps.data))
            }, 200)
        }}, 200)
}

export const getLikedPostTC = (profileId, token) => async dispatch => {
    let headers = {
        "Authorization": `Bearer ${token}`
    }
    let response = await axios.get(`http://127.0.0.1:8000/api/profile/${profileId}/`, {headers:headers})
    let data = [];
    response.data.liked_post.map(lp => {
        return data.push(lp)
    })
    dispatch(getPostsAC(data))
}

