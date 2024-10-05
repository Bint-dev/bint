// index.js
import { registerUser } from "./InicioSession/register.js";
import { loginUser } from "./InicioSession/login.js";
function index() {
  return (
    <div>
      <div>
        <registerUser />
      </div>
      <div>
        <loginUser />
      </div>
    </div>
  );
}

export default index;
