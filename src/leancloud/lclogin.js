import AV from 'leancloud-storage'
import handleError from './handleError'

function lcLogin(username, password, handleLoginSuccess){
    AV.User.logIn(username,password).then(function(userinfo){
        const username = userinfo.attributes.username
        const userID = userinfo.attributes.user_id
        handleLoginSuccess(username, userID)
    }).catch(handleError)
}

export default lcLogin