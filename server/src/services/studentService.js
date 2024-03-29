import db from "../db.js";
import express from "express";
import { error, log } from "console";

//Registering a student:

const registerStudent = async (req, res) => {
    try {
        const { educationDetails } = req.body;
        console.log(educationDetails);

        const { aadharNumber, instName, degree, startDate, graduationDate, currentYear } = educationDetails;
        const query = `
            INSERT INTO students (aadhar_no, institute_name, degree, start_date, graduation_date, current_year)
            VALUES ($1,$2,$3,$4,$5,$6)`;
        const values = [aadharNumber,instName,degree,startDate,graduationDate,currentYear];
        const result = await db.query(query, values);
        console.log(result.rows);

        res.status(201).json({ message: "Student registered successfully." }); 
    } catch (error) {
        console.error("Error registering student: ", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

//Login for student:

const loginStudent = async (req,res) => {
    try {
        const { aadharNumber } = req.body;
        console.log(`Aadhar number trying to login : ${aadharNumber}`);

        const result = await db.query(`SELECT * FROM students WHERE aadhar_no=${aadharNumber}`);
        console.log(result.rows);

        if (result.rows.length === 0) {
            res.status(200).json({
                status : "failure",
                message: "Aadhar not registered."});
        } else {
            res.status(200).json({ 
                status: "success",
                message: "Aadhar verified successfully."});
        }
    } catch(error) {
        console.error("Error logging in: ",error);
        res.status(500).json({ error: "Internal server error." });
    }
}

export { registerStudent, loginStudent };