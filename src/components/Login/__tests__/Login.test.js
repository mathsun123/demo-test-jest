import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Login from "../Login";
import { store } from "../../../store";
import { Provider } from "react-redux";

describe("test login username and password validation", () => {
  let usernameInput, passwordInput, submitButton, errorMessage;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    usernameInput = screen.getByTestId(/usernameId/i);
    passwordInput = screen.getByTestId(/passwordId/i);
    errorMessage = screen.getByTestId(/errorTestId/i);

    submitButton = screen.getByText("Login", { selector: "button" });
  });
  afterEach(cleanup);

  test("submitting the form with short username should display error message", () => {
    fireEvent.change(usernameInput, { target: { value: "us" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);
    expect(
      screen.getByText(
        "Username should be at least 3 characters and password should be at least 6 characters."
      )
    ).toBeInTheDocument();

    expect(errorMessage.innerHTML).toEqual(
      "Username should be at least 3 characters and password should be at least 6 characters."
    );
  });

  test("submitting the form with weak password should display error message", () => {
    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);
    expect(errorMessage.innerHTML).toEqual(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );

  });
});

