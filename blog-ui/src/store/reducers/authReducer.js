import axios from "axios";

const CREATE_USER = 'CREATE-USER';
const LOG_USER = 'LOG-USER';
const SET_TOKEN = 'SET-TOKEN';

const localState = {
    data: [],
    userData: [],
    token: []
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const AuthReducer = (state = localState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                data: action.data
            }

        case LOG_USER:
            return {
                ...state,
                userData: action.userData,
                data: action.data,
            }

        case SET_TOKEN:
            return {
                ...state,
                token: action.data,
            }

        default:
            return state
    }
}

const createUserAC = data => ({type: CREATE_USER, data: data});
const setTokenAC = data => ({type: SET_TOKEN, data: data});
const logUserAC = (data, userData) => ({type: LOG_USER, userData: userData, data: data});

export const createUserTC = data => async dispatch => {
    let response = await instance.post('auth/users/', data)
    setTimeout(async () => {
        let profileResponse = await instance.post('profile/create/',
            {user: response.data.id})
        setTimeout(async () => {
            await logUserTC(data)(dispatch)
        }, 200)
    }, 2000)
    dispatch(createUserAC(response.data))
}

export const logUserTC = data => async dispatch => {
    let response = await instance.post('auth/token/', data)
    dispatch(setTokenAC(response.data.access))
    setTimeout(async () => {
        let headers = {'Authorization': `Bearer ${response.data.access}`}
        let getToken = await axios.get('http://127.0.0.1:8000/api/auth/users/me/', {headers: headers})
        let getProfile = await instance.get(`profile/?user=${getToken.data.id}`)
        dispatch(logUserAC(getProfile.data[0], getToken.data))
    })
}

export const likePostTC = (id, profile, token) => async dispatch => {
    let headers = {
        "Authorization": `Bearer ${token}`
    }
    let data = {
        "liked_post": [id]
    }
    if (profile.liked_post.length === 0) {
        let response = await axios.patch(
            `http://127.0.0.1:8000/api/profile/${profile.id}/update`,
            data,
            {headers: headers}
        )
        return dispatch(createUserAC(response.data))
    } else {
        let liked = [];
        let liked_post = {
            "liked_post": liked
        }
        profile.liked_post.map(l => {
            return liked.push(l, id)
        })
        let response = await axios.patch(
            `http://127.0.0.1:8000/api/profile/${profile.id}/update`,
            liked_post,
            {headers: headers}
        )
        return dispatch(createUserAC(response.data))
    }
}
