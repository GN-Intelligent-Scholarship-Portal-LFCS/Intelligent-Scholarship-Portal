import express from "express";
import * as studentAPI from "../services/studentService.js";
import * as otpAPI from "../services/otpService.js";

const studentRoute = express.Router();

studentRoute.use(express.json());

//Endpoint for registering a student with Aadhar and Education details.
studentRoute.post("/api/register-student/:aadharNumber", studentAPI.registerStudent );

//Endpoint for verifying if student is registered or not (login).
studentRoute.post("/api/check-registered-student", studentAPI.loginStudent );

export default studentRoute;