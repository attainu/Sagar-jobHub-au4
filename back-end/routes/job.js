var router = require('express').Router();
const Job = require('../models/jobModel');

const { jobValidation } = require("../validators/bodyValidator");

const varify = require('../varifyToken');
const varifyRecruiter = require('../verifyRecruiter');

/* POST Save a job  */
router.post('/', varify , varifyRecruiter , jobValidation, async (req, res, next) => {

  const job = new Job({
    user_id: req.body.user_id, 
    location:req.body.location,
    company_name:req.body.company_name,
    total_employee:req.body.total_employee,
    your_name:req.body.your_name,
    phone_number:req.body.phone_number,
    jobtitle:req.body.jobtitle,
    role:req.body.role,
    job_type:req.body.job_type,
    min_experience:req.body.min_experience,
    max_experience:req.body.max_experience,
    min_salary:req.body.min_salary,
    max_salary:req.body.max_salary,
    maximum_hires:req.body.maximum_hires,
    description:req.body.description,
    skills:req.body.skills
  });

  try {
    const savedJob = await job.save();
    res.status(200).send(savedJob._id);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* GET get jobs  */
router.get('/', varify , async (req, res, next) => {
  const { jobTitle , location , company_name , role , jobId} = req.query;

  if(!jobTitle && location){
    try {
      const jobs = await Job.find({ location :location.toLowerCase()});
      res.status(200).send(jobs);
    } catch (error) {
      console.log(error);
    }
  }

  else if(jobTitle && !location){
    try {
      let jobArray = [];
      const jobs = await Job.find();
      jobs.map((job,index)=>{
      if(job.jobtitle.toLowerCase().includes(jobTitle.toLowerCase())) {
        jobArray.push(job)
      }
      })
      res.status(200).send(jobArray);
    } catch (error) {
      console.log(error);
    }
  }
  
  else if(jobTitle && location){
    try {
      let jobArray = [];
      const jobs = await Job.find();
      jobs.map((job,index)=>{
      if(job.jobtitle.toLowerCase().includes(jobTitle.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase())) {
        jobArray.push(job)
      }
      })
      res.status(200).send(jobArray);
    } catch (error) {
      console.log(error);
    }
  }

 else if(company_name){
    try {
      const jobs = await Job.find({ company_name : company_name.toLowerCase() });
      res.status(200).send(jobs);
    } catch (error) {
      console.log(error);
    }
  }

  else if(role){
    try {
      const jobs = await Job.find({ role : role.toLowerCase() });
      res.status(200).send(jobs);
    } catch (error) {
      console.log(error);
    }
  }
  else if(jobId){
    try {
      const job = await Job.findById(jobId);
      res.status(200).send(job);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.send([]);
  }

});

module.exports = router;