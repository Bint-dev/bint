// registerUser.js
import { pool } from "../database/conectionPost.js";
import bcrypt from "bcrypt";

export const registerUser = async (username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );
    console.log("User registered:", result.rows[0]);
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
