import * as actionTypes from '../constants/userinf0'

export function updateUser(data){
    return {
        type: actionTypes.USER_UPDATE,
        data: data
    }
}