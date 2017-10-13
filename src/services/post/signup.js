
import axios from 'axios';

export default {
  postSignup(payload) {
    console.log("inside services/post/login");
    axios.post('http://localhost:8080/users/registeruser',{
      username: payload.username,
      password: payload.password
    })
    .then(response=>{
      console.log("response from postSignup: ", response);
      return response;
    })
    .catch(error=>{
      console.log("PANIC ERROR IN POSTSIGNUP: ", error);
    });
  },
};
