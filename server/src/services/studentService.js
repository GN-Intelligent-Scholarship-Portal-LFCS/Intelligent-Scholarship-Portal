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
            VALUES ($1,$2,$3,$4,$5,$6);`;

        const values = [aadharNumber,instName,degree,startDate,graduationDate,currentYear];

        const result = await db.query(query, values);
        console.log(result.rows);

        res.status(201).json({ message: "Student registered successfully." }); 
    } catch (error) {
        console.error("Error registering student: ", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

export default registerStudent;