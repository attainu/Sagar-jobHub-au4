import React, { Component } from "react";
import "./Recruiter.css";
import { Link , Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {resumeSearchResult} from "./redux/actions";
import axios from 'axios';

class Recruiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeTitle: "",
      location: "",
      redirect:false
    }
  }

  // handle input change
  handleChange = (e) => {
    switch (e.target.name) {
      case "resumeTitle": {
        this.setState({ resumeTitle: e.target.value },()=>{console.log(this.state.resumeTitle)});
        break;
      }
      case "location": {
        this.setState({ location: e.target.value },()=>{console.log(this.state.location)});
        break;
      }
      default:
        return;
     }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.resumeTitle && !this.state.location) {
        console.log("both fields can't be empty")
        return;
    }

    this.searchResumes(this.state.resumeTitle,this.state.location);
  };

  //  API call
  searchResumes = async (resumeTitle, location) => {
    console.log("resumeTitle", resumeTitle,'location',location);
    try {
        const response = await axios.get(`http://localhost:3001/api/resumes?location=${location}&resumeTitle=${resumeTitle}`,
        {
            headers: {
                'auth_token': this.props.auth_token,
            }
        });
        this.props.resumeSearchResult(response.data);
        this.setState({redirect:true})

    } catch (error) {
        console.log("there is an error", error.response);
    }
    
  };

  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect push  to="/find-resumes" /> : null }
        <nav className="navbar navbar-default navbar-expand-xl navbar-light">
          <div className="navbar-header d-flex col">
            <Link className="navbar-brand" to="/">
              Job<b style={{ color: "#19aa8d" }}>Hub</b>
            </Link>
          </div>
          {/*  Collection of nav links, forms, and other content for toggling  */}
          <div
            id="navbarCollapse"
            className="collapse navbar-collapse justify-content-start"
          >
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item ml-5">
                <Link to="/post-job" className="nav-link">
                  Post a Job
                </Link>
              </li>
              <li className="nav-item ml-5">
                <Link to="/my-saved-resumes" className="nav-link">
                  Saved Resumes
                </Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right ml-auto">
              <li className="nav-item mr-5">
                <a href="/" className="nav-link notifications">
                  <i className="fa fa-bell-o"></i>
                  <span className="badge">1</span>
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="/" className="nav-link messages">
                  <i className="fa fa-envelope-o"></i>
                  <span className="badge">10</span>
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  href="/"
                  data-toggle="dropdown"
                  className="nav-link dropdown-toggle user-action"
                >
                  <img
                    src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
                    className="avatar"
                    alt="Avatar"
                  />
                  Paula Wilson
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/" className="dropdown-item">
                      <i className="fa fa-user-o"></i> Profile
                    </a>
                  </li>
                  <li className="divider dropdown-divider"></li>
                  <li>
                    <a href="/" className="dropdown-item">
                      <i className="material-icons">&#xE8AC;</i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        {/*  */}
        <div className="jumbotron  pt-1">
          <h2 className=" text-center text-white">Let Us Find Resumes For You</h2>
          <form className="text-white" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-row">
              <div className="form-group col-md-5">
                <input
                  name="resumeTitle"
                  type="text"
                  className="form-control"
                  placeholder="keyword , role, skills"
                  onChange={(e)=>{this.handleChange(e)}}
                />
              </div>
              <div className="form-group col-md-5">
                <input
                  name="location"
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  onChange={(e)=>{this.handleChange(e)}}
                />
              </div>
              <div className="form-group col-md-2">
                <button className="form-control btn btn-warning">Search Resumes</button>
              </div>
            </div>
          </form>
        </div>
        {/*  */}
        <div className="text-center pl-2 pr-2 mmt ">
          <span className="bold-text">Post a Job in 5 minutes.</span>
          <Link to='/post-job'>
          <button
            type="button"
            className="btn btn-outline-warning border border-warning ml-4"
          >
            Post a Job
          </button>
          </Link>
        </div>
        <br/>
        <div className='row mt-5 ml-5 mr-5'>
          <div className='col-4 p-5'>
            <div className="card bg-light mb-3 text-center shadow-lg" >
            <div className="card-header font-weight-bolder">Total Number of Posted Jobs</div>
            <div className="card-body">
              <h1 className="card-title font-weight-bolder">9</h1>
            </div>
            </div>
          </div>
          <div className='col-4 p-5'>
            <div className="card bg-light mb-3 text-center shadow-lg" >
            <div className="card-header font-weight-bolder">Total Number of Appliers</div>
            <div className="card-body">
              <h1 className="card-title font-weight-bolder">1029</h1>
            </div>
            </div>
          </div>
          <div className='col-4 p-5'>
            <div className="card bg-light mb-3 text-center shadow-lg" >
            <div className="card-header font-weight-bolder">Total number of Accepted Resumes</div>
            <div className="card-body">
              <h1 className="card-title font-weight-bolder">7</h1>
            </div>
            </div>
          </div>
        </div>
        <div className='row  ml-5 mr-5'>
          <div className='col-4 p-5'>
            <div className="card bg-light mb-3 text-center shadow-lg" >
            <div className="card-header font-weight-bolder">Total number of Rejected Resumes</div>
            <div className="card-body">
              <h1 className="card-title font-weight-bolder">9</h1>
            </div>
            </div>
          </div>
          <div className='col-4 p-5'>
            <div className="card bg-light mb-3 text-center shadow-lg" >
            <div className="card-header font-weight-bolder">Total Number of Posted Jobs</div>
            <div className="card-body">
              <h1 className="card-title font-weight-bolder">1029</h1>
            </div>
            </div>
          </div>
          <div className='col-4 p-5'>
            <div className="card bg-light mb-3 text-center shadow-lg" >
            <div className="card-header font-weight-bolder">Total number of ....</div>
            <div className="card-body">
              <h1 className="card-title font-weight-bolder">7</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {_id:state._id,auth_token:state.auth_token};
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      resumeSearchResult  
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps) (Recruiter);
