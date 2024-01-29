import db from "../db.js";
import { error, log } from "console";

const otpStorage = {};

//Function to send OTP:
const sendOTP = async (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(otp);
    try {
        const { phoneNumber } = req.body;
        console.log(phoneNumber);
        //Storing the generated OTP for verification:
        otpStorage[phoneNumber] = otp;

        res.status(200).json({
            message: `OTP sent to mobile number: ${phoneNumber} \nOTP : ${otp}`,
            otp: otp,
        });
    } catch (error) {
        console.error("Error sending OTP:", error);
        res.status(500).json({ error: "Internal server error!" });
    }
}

//Function to verify OTP:
const verifyOTP = async (req, res) => {
    try {
        const { phoneNumber, userEnteredOTP } = req.body;

        const storedOTP = otpStorage[phoneNumber];

        //Verifying if user entered OTP is correct:
        if (userEnteredOTP == storedOTP) {
            //OTP is correct. So we remove the stored OTP.
            delete otpStorage[phoneNumber];
            //Storing the org_id for further scholarship details purpose:
            res.json({ status: "success", message: "OTP verified successfully" });
        } else {
            //OTP is incorrect.
            delete otpStorage[phoneNumber];
            res.json({ status: "error", message: "Invalid OTP, generate OTP again." });
        }
    } catch (error) {
        console.error("Error verifying OTP: ", error);
        res.status(500).json({ error: "Internal server error!" });
    }
}

export {sendOTP,verifyOTP};