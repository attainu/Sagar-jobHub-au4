const axios = require('axios');

export  function login(user) {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/api/users/sign-in',user);
            
            return dispatch({type:'SUCCESS-SIGNIN',payload:{
                role:response.data.role,
                date:response.data.date,
                _id:response.data._id,
                name:response.data.name,
                email:response.data.email,
                auth_token:response.headers.auth_token
            }});
        } catch (error) {
            return dispatch({type:'UNSUCCESS-SIGNIN'});
        }

    }
}

export  function signedUp(email) {
return {type:"SIGNED-UP",payload:email}
}

export function setUserType(role,_id) {
   
    return async (dispatch) => {
        try {
             const response = await axios.put('http://localhost:3001/api/users/role',{role : role ,_id : _id});
             
             return dispatch({type:'SET-USER-ROLE',payload:{role:response.data,auth_token:response.headers.auth_token}});
        } catch (error) {
             return dispatch({type:'UNSUCCESS'});
        }
    }
}

export function resumeNotCreated() {
     return {type:"RESUME-NOT-CREATED"}
};

export function jobSearchResult(jobs) {
    
    return {type:"JOB-SEARCH-RESULT",payload:jobs}
};