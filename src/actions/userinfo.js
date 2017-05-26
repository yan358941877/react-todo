import * as actionTypes from '../constants/userinfo'

export function updateUser(data){
    return {
        type: actionTypes.USER_UPDATE,
        data: data
    }
}