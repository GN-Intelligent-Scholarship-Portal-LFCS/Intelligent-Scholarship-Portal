import express from "express";

const instituteRoute = express.Router();

instituteRoute.get("/register", (req, res) => {
    res.send("Institutes Register page.");
});

instituteRoute.get("/login", (req, res) => {
    res.send("Institutes Login page.");
});

export default instituteRoute;