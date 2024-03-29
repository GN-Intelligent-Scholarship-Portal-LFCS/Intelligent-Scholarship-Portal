import db from "../db.js";
import express from "express";
import { error, log } from "console";


//Fetching aadhar details from database for a particular aadhar number :

const fetchAadharDetails = async (req, res) => {
    const aadharNumber = req.params.aadharNumber;

    //Checking if aadhar number exists or not in the table.
    try {
        const result = await db.query(`SELECT * FROM aadhar_details WHERE aadhar_no=${aadharNumber}`);
        if (result.rows.length > 0) {
            const aadharDetails = result.rows;
            // console.log(aadharDetails);
            res.json(aadharDetails);
        } else {
            res.status(404).json({ error: "Aadhar details not found!" });
        }
    } catch (error) {
        console.error("Error fetching aadhar details:", error);
        res.json({ error: "Internal server error!" });
    }
}

//Verification of Aadhar Number:

const verifyAadhar = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const { aadharNumber } = req.body;
        console.log('Aadhar Number:', aadharNumber);

        const aadharVerificationResult = await db.query(`SELECT * FROM aadhar_details WHERE aadhar_no=${aadharNumber}`); //Checking if aadhar exists in the UIDAI database.

        if (aadharVerificationResult.rows.length === 0) {
            return res.status(404).json({
                status : "failure", 
                message: "Aadhar number not verified." });
        } else {
            const existingAadharResult = await db.query(`SELECT * FROM students WHERE aadhar_no=${aadharNumber}`); //Checking if aadhar is already registered to ISP.
            if (existingAadharResult.rows.length === 0){
                return res.status(200).json({ 
                    status : "success",
                    message: "Aadhar verified successfully!" });
            } else {
                return res.status(200).json({
                    status : "success",
                    message: "Aadhar already registered!" });
                }
        }
        } catch (error) {
            console.error("Error verifying aadhar: ", error);
            res.status(500).json({ error: "Internal server error." });
        }
}

export { verifyAadhar, fetchAadharDetails };