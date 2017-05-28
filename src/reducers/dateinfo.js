import * as actionTypes from '../constants/dateinfo'

const initState = {}

export default function(state=initState, action){
    switch(action.type){
        case actionTypes.CHECKED_dATE_UPDATE:
            return action.date
        default:
            return state
    }
}