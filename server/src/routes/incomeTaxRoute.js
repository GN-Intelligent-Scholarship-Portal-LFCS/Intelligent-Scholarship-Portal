import express from "express";

const incomeTaxRoute = express.Router();

incomeTaxRoute.get("/", (req, res) => {
    res.send("IncomeTax Department page.");
});

export default incomeTaxRoute;