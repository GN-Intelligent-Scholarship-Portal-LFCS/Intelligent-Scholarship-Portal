import express from "express";
import db from "../db.js";
import * as aadharAPI from "../services/aadharService.js";
import * as otpAPI from "../services/otpService.js";

const aadharRoute = express.Router();

aadharRoute.use(express.json());

//Endpoint for fetching aadhar details from the database for a particular aadhar number.
aadharRoute.get("/api/aadhar-details/:aadharNumber", aadharAPI.fetchAadharDetails);

//Endpoint for sending OTP:
aadharRoute.post("/api/send-otp", otpAPI.sendOTP);

//Endpoint for verifying OTP:
aadharRoute.post("/api/verify-otp", otpAPI.verifyOTP);

//Endpoint for verifying an Aadhar number.
aadharRoute.post("/api/verify-aadhar", aadharAPI.verifyAadhar)


export default aadharRoute;