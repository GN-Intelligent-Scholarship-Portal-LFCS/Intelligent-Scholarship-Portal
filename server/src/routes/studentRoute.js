import express from "express";
import registerStudent from "../services/studentService.js";
import * as otpAPI from "../services/otpService.js";

const studentRoute = express.Router();

studentRoute.use(express.json());

//Endpoint for registering a student with Aadhar and Education details.
studentRoute.post("/api/register-student/:aadharNumber", registerStudent );

export default studentRoute;