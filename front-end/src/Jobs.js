import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {  } from "./redux/actions";

class Jobs extends Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
      {this.props.jobs.map((job,index)=>{   
      return <div key={index} className="card text-center mt-5 shadow p-1  rounded " >
          <div className="card-body">
            <h4 className="card-title">{job.jobtitle}</h4>
            <p className="card-text m-1">{job.company_name}</p>
            <p className="card-text m-1">{job.location},{job.max_salary}, {job.min_experience}</p>
          </div>
          <div className="card-footer  p-1">
            <span className='float-left ml-5 text-muted' > 2 days ago </span>
            <span className='float-right mr-5'> apply now </span>
          </div>
        </div>
        })}  
        </div>        
        <div className='col-3'></div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {jobs:state.jobs};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Jobs);