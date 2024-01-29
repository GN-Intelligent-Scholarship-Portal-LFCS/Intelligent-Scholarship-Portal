import express from "express";
import * as schemeAPI from "../services/scholarshipService.js";
import * as otpAPI from "../services/otpService.js";

const scholarshipRoute = express.Router();

scholarshipRoute.use(express.json());

//Endpoint for verifying TAN number and registering the organisation.
scholarshipRoute.post("/api/register-organisation/:tanNumber", schemeAPI.registerOrganisation);

//Endpoint for sending OTP:
scholarshipRoute.post("/api/send-otp", otpAPI.sendOTP);

//Endpoint for verifying OTP:
scholarshipRoute.post("/api/verify-otp", otpAPI.verifyOTP);

//Endpoint for filling out a scholarship form.
scholarshipRoute.post("/api/fill-scholarship-form/:tanNumber", schemeAPI.fillScholarshipForm);

export default scholarshipRoute;
