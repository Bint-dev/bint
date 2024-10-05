import { pool } from "./database/conectionPost.js";

const getLanguages = async () => {
  try {
    const result = await pool.query("SELECT id, username, password FROM users");
    console.table(result.rows);
    console.log("la base de datros esta corriendo");
  } catch (error) {
    console.error(error);
  }
};

getLanguages();
