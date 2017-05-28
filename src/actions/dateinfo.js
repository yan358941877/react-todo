import * as actionTypes from '../constants/dateinfo'

export function updateCheckedDate(date){
    return {
        type: actionTypes.CHECKED_dATE_UPDATE,
        date: date
    }
}