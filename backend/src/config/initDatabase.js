const mysql = require("mysql2/promise");
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = require("./envConfig");

(async () => {
  try {
    // Create a connection to the MySQL server without specifying a database
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USERNAME,
      password: DB_PASSWORD,
    });

    // Create the database if it does not exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    console.log(`Database '${DB_NAME}' created or already exists.`);

    // Close the connection
    await connection.end();
    process.exit(0);
  } catch (error) {
    console.error("Unable to create the database:", error);
    process.exit(1);
  }
})();
