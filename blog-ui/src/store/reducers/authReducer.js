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
    }, 2000)
    console.log(response.data)
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
