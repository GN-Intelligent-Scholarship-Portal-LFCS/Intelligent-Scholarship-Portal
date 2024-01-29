import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import studentRoute from "./routes/studentRoute.js";
import scholarshipRoute from "./routes/scholarshipRoute.js";
import instituteRoute from "./routes/instituteRoute.js";
import aadharRoute from "./routes/aadharRoute.js";
import incomeTaxRoute from "./routes/incomeTaxRoute.js";

const app = express();
const port = 5000;

app.use(express.json()); // Add this line to parse JSON data
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/student", studentRoute);
app.use("/scholarship", scholarshipRoute);
app.use("/institute", instituteRoute);
app.use("/incomeTax", incomeTaxRoute);
app.use("/aadhar", aadharRoute);


app.get("/", (req, res) => {
    res.send("Home");
});
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});