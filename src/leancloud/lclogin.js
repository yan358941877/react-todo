import AV from 'leancloud-storage'
import handleError from './handleError'

function lcLogin(username, password, onSuccess){
    AV.User.logIn(username,password).then(onSuccess).catch(handleError)
}

export default lcLogin