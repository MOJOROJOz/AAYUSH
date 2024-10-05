import React from "react";
import "../../styles/Register.css";

function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
