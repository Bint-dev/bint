// index.js
import { registerUser } from "./InicioSession/register.js";
import { loginUser } from "./InicioSession/login.js";
function index() {
  return (
    <div>
      <div>
        <registerUser />
        <h1>hola mundo</h1>
      </div>
      <div>
        <loginUser />
      </div>
    </div>
  );
}

export default index;
