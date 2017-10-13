import LoginPost from '../services/post/login';
import SignupPost from '../services/post/signup';

export const loginaction = ({ commit }, { username, password }) => {
  // console.log("inside loginaction")
    // console.log('inside async function LOGIN_POST and value of payload is ', {username}, {password});
    const loginpostreturn = LoginPost.postLogin({username, password});
    commit('LOGIN_POST_RETURN', loginpostreturn);
};

export const signupaction = ({ commit }, { payload }) => {
  console.log("inside signupaction")
    const signuppostreturn = SignupPost.postSignup(payload);
    commit('SIGNUP_POST_RETURN', signuppostreturn);
};
