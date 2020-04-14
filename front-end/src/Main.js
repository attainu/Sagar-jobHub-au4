import React, { Component } from "react";
import { Switch,Link,  Route , Redirect } from "react-router-dom";
import {connect} from "react-redux";
import "./Main.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import UserType from "./UserType";
import JobSeeker from "./JobSeeker";
import Recruiter from "./Recruiter";
import PostJob from './PostJob';
import ResumeForm from './ResumeForm';
import Jobs from "./Jobs"

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" >
            {this.props.isLoggedIn ? this.props.role === "null" ? <UserType/> : this.props.role === "jobSeeker" ? <JobSeeker /> : <Recruiter/>  : <Redirect to="/sign-in" push={true}/>}
          </Route>
          <Route  path="/sign-up" component={SignUp} />
          <Route  path="/sign-in">
            {this.props.isLoggedIn ? <Redirect to='/' push={true}/>: <SignIn/> }
          </Route>
          <Route  path="/create-resume">
            {this.props.isLoggedIn && this.props.role === "jobSeeker" ? <ResumeForm/> : <Redirect to='/sign-in' push={true}/> }
          </Route>
          <Route  path="/post-job">
            {this.props.isLoggedIn && this.props.role === "recruiter" ? <PostJob/> : <Redirect to='/sign-in' push={true}/> }
          </Route>
          <Route  path="/find-jobs">
            {this.props.isLoggedIn && this.props.role === "jobSeeker" ? <Jobs/> : <Redirect to='/sign-in' push={true}/> }
          </Route>
        </Switch>
        {/* <Jobs/> */}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {isLoggedIn:state.isLoggedIn , role : state.role};
} 
const mapDispatchToProps = (dispatch) => {
  return {};
}
export default connect(mapStateToProps,mapDispatchToProps) (Main);