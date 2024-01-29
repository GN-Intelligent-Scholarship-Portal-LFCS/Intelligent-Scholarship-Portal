import db from "../db.js";
import { error, log } from "console";


//Verification of TAN number and registering of organisations into ISP :
const registerOrganisation = async (req, res) => {
    try {
        const { tanNumber } = req.params;
        console.log(tanNumber);
        //Verify if the tan number exists.
        const tanVerificationResult = await db.query(`SELECT * FROM incometax WHERE tan_no=${tanNumber}`);

        if (tanVerificationResult.rows.length === 0) {
            const responseData = {
                success: error,
                message: "Invalid TAN number",
                redirectUrl: "/register-organisation"
            }
            return res.status(404).json(responseData);
        }
        else {
            //Extracting TAN details from incometax table:
            const { tan_no, bank_name, account_name, company_name, account_no, branch_address, ifsc_code, phone_no } = tanVerificationResult.rows[0];

            //Checking if organisation is already registered or not: 
            const existingTan = await db.query(`SELECT * FROM organisations WHERE tan_no=${tanNumber}`);

            if (existingTan.rows.length === 0) {
                const query = `INSERT INTO organisations (name,tan_no,phone_no,ifsc_code,branch_address,account_no,account_name,bank_name)
                           VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;
                const values = [company_name, tan_no, phone_no, ifsc_code, branch_address, account_no, account_name, bank_name];

                const organisationInsertResult = await db.query(query, values);
                const registeredOrganisation = organisationInsertResult.rows[0];

                const responseData = {
                    success: true,
                    message: "Organisation registered successfully",
                    organisation: registeredOrganisation,
                    redirectUrl: `/organisation-login/${tanNumber}`
                };
                res.status(200).json(responseData);
            } else {
                const responseData = {
                    success: false,
                    message: "Organisation already exists",
                    redirectUrl: "/organisation-register"
                }
                res.status(200).json(responseData);
            }
        }
    } catch (error) {
        console.error("Error registering organisation:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}


//Function to login for organisation and fill scholarship form and register it into the scholarships table:
const fillScholarshipForm = async (req, res) => {
    const { tanNumber } = req.params;
    console.log("Tan Number: " + tanNumber);
    console.log("Request Body:", req.body);
    const { schemeName, amount, guidelines, startDate, endDate } = req.body;
    console.log(schemeName, amount, guidelines, startDate, endDate);
    try {
        const org_id_result = await db.query(`SELECT id FROM organisations WHERE tan_no=${tanNumber}`);
        const org_id = org_id_result.rows[0].id;
        console.log("Org ID: " + org_id);

        const query = `INSERT INTO scholarships (org_id,name,amount_in_rupees,guidelines,start_date,end_date)
                       VALUES ($1,$2,$3,$4,$5,$6)`;
        const values = [org_id, schemeName, amount, guidelines, startDate, endDate];
        const scheme_result = await db.query(query, values);
        console.log(scheme_result);


        res.status(200).json({
            status: "success",
            message: `Scheme registered successfully for Organisation ID: ${org_id}`,
        });

    } catch (error) {
        console.error("Error filling scheme details: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export { fillScholarshipForm, registerOrganisation};