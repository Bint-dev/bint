import pg from "pg";

export const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "auth_db",
  user: "postgres",
  password: "123456",
});

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err);
  } else {
    console.log("Database is running and connected successfully");
  }
});
