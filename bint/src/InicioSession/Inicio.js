import React from "react";
import { loginUser } from "./login.js";
import { registerUser } from "./register.js";

function Inicio() {
  return (
    <div>
      <div>
        <loginUser />
      </div>
      <div>
        <registerUser />
      </div>
    </div>
  );
}

export default Inicio;
