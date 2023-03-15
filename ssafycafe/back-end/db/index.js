const mysql = require("mysql2/promise");

const pool = mysql.createPool({
	// aws ip
	host: "13.125.221.117",
	// mysql username
	user: "ssafy",
	// mysql user password
	password: "Parkjh123^^",
	// db name
	database: "order_schema",
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = { pool };
