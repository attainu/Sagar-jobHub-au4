import {
    createStore
} from 'redux';
import {
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    // Auth
    isLoggedIn: false,
    alert: false,
    auth_token:"",
    // User
    name: "",
    email: "",
    role: "",
    _id: "",
    date: "",
    isResumeCreated:true,
    // jobs
    jobs:[],
   
    // search data
    region:['Pune','Hyderabad','Bengaluru','Rajkot','Kolkata','Mumbai','Jaipur','Lucknow','Surat','Kanpur','Ahmedabad','Chennai','Delhi','Chandigarh','Gurgaon','Noida'],
    companies:['company_name','Flipkart','Amazon','Oyo','One97','Uber','Swiggy','DHL','Tata','Zomato','Alphabet','Reliance','Bajaj','Paytm','Adobe'],
    category : ['Role','Recruitment Consultant','Interior Designer','Cashier','Application Developer','Devops Engineer','Php Developer','Java Script Developer','Senior Java Developer','Senior Web Designer','UI/UX Designer','Unix Engineer','Web Application Developer','Web Designer - Trainee','IT Software Fresher','Networking Manager','Webmaster','Computer Operator','Amazon','Banking','AngularJS Developer','Photoshop','Corel Draw','After Effects','Core PHP','Jquery Expert','Digital Marketing','Content Writing','Blog Posting','Social Media Marketing','Bootstrap','Manual Testing','Operations Manager','Java Full Stack Developer','Javascript','Nodejs','Programmers','Game Developer','Graphic Designer','Automation Fresher','Internship','Trainee']

}

const reducer = (state = initialState, action) => {
    let copyOfState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'SUCCESS-SIGNIN': {
            copyOfState.isLoggedIn = true;
            copyOfState.alert = false;
            copyOfState.name = action.payload.name;
            copyOfState.email = action.payload.email;
            copyOfState._id = action.payload._id;
            copyOfState.date = action.payload.date;
            copyOfState.role = action.payload.role;
            copyOfState.auth_token = action.payload.auth_token;
            return copyOfState;
        }
        case 'UNSUCCESS-SIGNIN': {
            copyOfState.alert = true;
            return copyOfState;
        }
        case "SIGNED-UP": {
            copyOfState.email = action.payload;
            return copyOfState;
        }
        case 'SET-USER-ROLE': {
            copyOfState.role = action.payload.role;
            copyOfState.auth_token = action.payload.auth_token;
            return copyOfState;
        }
        case 'RESUME-NOT-CREATED': { 
            copyOfState.isResumeCreated = false;
            return copyOfState;
        }
        case 'JOB-SEARCH-RESULT': { 
            copyOfState.jobs = action.payload;
            
            return copyOfState;
        }
        default:
            return state;
    }
    // return copyOfState;
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;