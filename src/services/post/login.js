
import axios from 'axios';

export default {
  postLogin({username, password}) {
    console.log("inside services/post/login");
    console.log("username: ", username);
    console.log("password: ", password);
    axios.post('http://localhost:8080/users/userlogin',{
      username: username,
      password: password
    })
    .then(response=>{
      console.log("response from postlogin: ", response);
      return response;
    })
    .catch(error=>{
      console.log("PANIC ERROR IN POSTLOGIN: ", error);
    });
  },
};
