import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { counterState } = useSelector(
    (state) => ({
      counterState: state.counterState,
    }),
    shallowEqual
  );
  console.log(counterState);
  const dispatch = useDispatch();

  const loginValidation = () => {
    let formIsValid = true;
    let errorMessage = "";

    if (formData.username === "" || formData.password === "") {
      formIsValid = false;
      errorMessage = "Username and password are required";
    } else if (formData.username.length < 3 || formData.password.length < 6) {
      formIsValid = false;
      errorMessage =
        "Username should be at least 3 characters and password should be at least 6 characters.";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(formData.password)
    ) {
      formIsValid = false;
      errorMessage =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    document.getElementById("errorMsg").innerHTML = errorMessage;
    return formIsValid;
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    let validate = loginValidation();
    if (validate) {
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  return (
    <div className="login-form" style={{ marginTop: "16%" }}>
      <div className="login-form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              data-testid="usernameId"
              type="text"
              aria-labelledby="username-label"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              data-testid="passwordId"
              type="password"
              aria-labelledby="password-label"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div
            id="errorMsg"
            data-testid="errorTestId"
            className="text-danger"
            style={{ color: "red", width: 321 }}
          ></div>
          <button
            type="submit"
            className="login-button"
            style={{
              width: "105%",
              ...(isLoading && { backgroundColor: "grey" }),
            }}
            disabled={isLoading}
          >
            {isLoading ? "Please Wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
