import React, { Component } from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { setUserType } from "./redux/actions";
import "./UserType.css";
class UserType extends Component {
  
  handleClick = (e) => {
    this.props.setUserType(e.target.value,this.props._id);
  } 

  render() {
    return ( 
      <div className="row m-5 text-center">
        <div className="col-6 p-5 ">
          <div className="card bg-dark text-warning shadow-lg ">
            <img src="https://www.turkeytalent.com/blog/wp-content/uploads/2015/08/Job-Search-Techniques.jpg" style={{height:"40rem"}} className="card-img " alt="a" />
            <div className="card-img-overlay ">
              <h3 className="card-text font-weight-bolder shadow bg-secondary">
                Bring Your Resume To Us We Bring JOBS To You.
              </h3>
              <button onClick={(e)=>{this.handleClick(e)}} value="jobSeeker" type="button" className="btn btn-warning btn-lg shadow-lg">Job Seeker</button>
            </div>
          </div>
        </div>
        <div className="col-6 p-5">
          <div className="card bg-dark text-warning shadow-lg ">
            <img src="https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2017/08/Banner-Blog.jpg" style={{height:"40rem"}} className="card-img" alt="b" />
            <div className="card-img-overlay">
            <h3 className="card-text font-weight-bolder shadow bg-secondary">
                Find The Right Talent For Your Business.
              </h3>
              <button onClick={(e)=>{this.handleClick(e)}} value="recruiter" type="button" className="btn btn-warning btn-lg shadow-lg"> Recruiter </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {_id : state._id};
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUserType }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(UserType);

