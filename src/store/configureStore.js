import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function(initState){
    const store = createStore(rootReducer,initState,
        window.devToolsExtension ? window.devToolsExtension():undefined
    )
    return store
}