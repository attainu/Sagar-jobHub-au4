import React, { Component } from "react";
import "./Recruiter.css";
import { Link } from "react-router-dom";

class Recruiter extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-expand-xl navbar-light">
          <div className="navbar-header d-flex col">
            <a className="navbar-brand" href="/">
              Job<b style={{ color: "#19aa8d" }}>Hub</b>
            </a>
          </div>
          {/*  Collection of nav links, forms, and other content for toggling  */}
          <div
            id="navbarCollapse"
            className="collapse navbar-collapse justify-content-start"
          >
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item ml-5">
                <a href="/" className="nav-link">
                  Find Resumes
                </a>
              </li>
              <li className="nav-item ml-5">
                <Link to="/post-job" className="nav-link">
                  Post a Job
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
                  <li>
                    <a href="/" className="dropdown-item">
                      <i className="fa fa-sliders"></i> Settings
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
          <form className="text-white">
            <div className="form-row">
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job title, skills, or company"
                />
              </div>
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>
              <div className="form-group col-md-2">
                <button className="form-control btn btn-warning">Search Resumes</button>
              </div>
            </div>
          </form>
        </div>
        {/*  */}
        <div className="text-center pl-2 pr-2 mmt">
          <span className="bold-text">Post a Job in 5 minutes.</span>
          <button
            type="button"
            className="btn btn-outline-warning border border-warning ml-4"
          >
            Post a Job
          </button>
        </div>
        {/*  */}
        <div className='pl-5 pr-2'>
          <h4>Job vacancies by region:</h4>
        </div>
        {/*  */}
        <div className="pl-5 pr-2">
          <h4>Job vacancies by state:</h4>
        </div>
        {/*  */}
        <div className='pl-5 pr-2'>
          <h4>Job vacancies by category:</h4>
        </div>
      </div>
    );
  }
}

export default Recruiter;
