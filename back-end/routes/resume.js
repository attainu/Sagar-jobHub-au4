var router = require('express').Router();
const Resume = require('../models/resumeModel');

const { resumeValidation } = require("../validators/bodyValidator");

const varify = require('../varifyToken');
const varifyJobseeker = require('../verifyJobseeker');

/* POST Save a Resume  */
router.post('/', varify , varifyJobseeker , resumeValidation, async (req, res, next) => {

  const resume = new Resume({
         user_id: req.body.user_id,
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         location: req.body.location,
         experience: req.body.experience,
         resume_headline: req.body.resume_headline,
         current_salary: req.body.current_salary,
         show_salary: req.body.show_salary,
         email: req.body.email,
         phone_number: req.body.phone_number,
         show_phone: req.body.show_phone,
         privacy: req.body.privacy,
         course: req.body.course,
         college_university: req.body.college_university,
         college_university_location: req.body.college_university_location,
         education_to_year: req.body.education_to_year,
         education_from_month: req.body.education_from_month,
         education_from_year: req.body.education_from_year,
         education_to_month: req.body.education_to_month,
         skills: req.body.skills
  });

  try {
    const savedResume = await resume.save();
    res.status(200).send(savedResume._id);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* GET get a Resume  */
router.get('/:_id', varify , varifyJobseeker , async (req, res, next) => {
  console.log("_id",req.body._id)
  try {
    const resumeExist = await Resume.findOne({ user_id: req.params._id });
    console.log("resumeExist",resumeExist);
    if (resumeExist) return res.status(200).send(true);
    else
    res.status(200).send(false);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;