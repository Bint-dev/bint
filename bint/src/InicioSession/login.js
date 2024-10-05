// loginUser.js
import { pool } from "../database/conectionPost.js";
import bcrypt from "bcrypt";

export const loginUser = async (username, password) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        console.log("Login successful:", user);
      } else {
        console.log("Invalid password");
        throw new Error("Invalid password");
      }
    } else {
      console.log("User not found");
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
