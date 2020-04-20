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
import Jobs from "./Jobs";
import Job from "./Job"
import MyAppliedJobs from './MyAppliedJobs';
import MyAppliedJob from './MyAppliedJob';
import Resumes from './Resumes';
import Resume from './Resume';
import MySavedResumes from './MySavedResumes';
import MySavedResume from './MySavedResume';

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
            {this.props.isLoggedIn && this.props.role === "jobSeeker" ? <ResumeForm/> : <Redirect to='/sign-in' /> }
          </Route>
          <Route  path="/post-job">
            {this.props.isLoggedIn && this.props.role === "recruiter" ? <PostJob/> : <Redirect to='/sign-in' /> }
          </Route>
          <Route  path="/find-jobs">
            {this.props.isLoggedIn && this.props.role === "jobSeeker" ? <Jobs/> : <Redirect to='/sign-in' /> }
          </Route>
          <Route  path="/job-details">
            {this.props.isLoggedIn && this.props.role === "jobSeeker" && this.props.job ? <Job/> : <Redirect to='/' push={true} /> }
          </Route>
          <Route  path="/my-applied-jobs">
            {this.props.isLoggedIn && this.props.role === "jobSeeker" ? <MyAppliedJobs/> : <Redirect to='/sign-in' /> }
          </Route>
          <Route  path="/my-applied-job">
            {this.props.isLoggedIn && this.props.role === "jobSeeker" ? <MyAppliedJob/> : <Redirect to='/sign-in' /> }
          </Route>
          <Route  path="/find-resumes">
            {this.props.isLoggedIn && this.props.role === "recruiter" ? <Resumes/> : <Redirect to='/sign-in' /> }
          </Route>
          <Route  path="/resume-details">
            {this.props.isLoggedIn && this.props.role === "recruiter" && this.props.resume ? <Resume/> : <Redirect to='/' push={true} /> }
          </Route>
          <Route  path="/my-saved-resumes">
            {this.props.isLoggedIn && this.props.role === "recruiter"  ? <MySavedResumes/> : <Redirect to='/' push={true} /> }
          </Route>
          <Route  path="/my-saved-resume">
            {this.props.isLoggedIn && this.props.role === "recruiter"  ? <MySavedResume/> : <Redirect to='/' push={true} /> }
          </Route>
        </Switch>
        {/* <Resumes/> */}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {isLoggedIn:state.isLoggedIn , role : state.role, job:state.job,resume:state.resume};
} 
const mapDispatchToProps = (dispatch) => {
  return {};
}
export default connect(mapStateToProps,mapDispatchToProps) (Main);