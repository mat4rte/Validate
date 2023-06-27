import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
