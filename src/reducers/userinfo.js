import * as actionTypes from '../constants/userinfo'

const initState = {}

export default function(state=initState, action){
    switch(action.type){
        case actionTypes.USER_UPDATE:
            return {
                ...state, 
                username: action.data.username,
                userID: action.data.userID
            }
        default:
            return state
    }
}