import AV from 'leancloud-storage'
import handleError from './handleError'


function lcSignup(username, password, email, handleSignupSuccess) {
    var user = new AV.User()
    user.setUsername(username)
    user.setPassword(password)
    user.setEmail(email)
    user.signUp().then(function (userinfo) {
        // console.log(userinfo.attributes.username)
        // console.log(userinfo.attributes.user_id)
        const username = userinfo.attributes.username
        const userID = userinfo.attributes.user_id
        handleSignupSuccess(username, userID)
    }).catch(handleError)
}

export default lcSignup