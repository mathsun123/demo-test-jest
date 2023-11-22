import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../Login";
import { store } from "../../../store";
import { Provider } from "react-redux";

describe("test login component by screenshot", () => {
  test("snapshot should match", () => {
    const rendered = render(
      <Provider store={store}>
        <Login />
      </Provider>
    ); // Re-render the component after changing input value
    const usernameInput = screen.getByTestId(/usernameId/i);

    fireEvent.change(usernameInput, { target: { value: "testAccount1" } });

    const updatedComponent = rendered.asFragment();
    expect(updatedComponent).toMatchSnapshot("usernameChangedInput");
  });

  test("snapshot should match after changing password input and clicking submit", () => {
    const { container } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    ); // Render the component

    // Find input elements and button

    const passwordInput = screen.getByTestId(/passwordId/i);
    const submitButton = screen.getByText("Login", { selector: "button" });
    const errorMessage = screen.getByTestId(/errorTestId/i);
    // Change password input value
    fireEvent.change(passwordInput, { target: { value: "abc123" } });

    // Simulate form submission
    fireEvent.click(submitButton);
    expect(errorMessage.innerHTML).toEqual(
      "Username and password are required"
    );
    // Check the rendered output
    expect(container).toMatchSnapshot("passwordChange");
  });
});

