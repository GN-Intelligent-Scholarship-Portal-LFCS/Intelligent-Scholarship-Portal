//This file contains the database for the project.
import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "isp",
    password: "firelaw123",
    port: 5432,
});

db.connect();

export default db;