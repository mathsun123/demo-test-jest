import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Login from "./Login";

describe("test login username and password validation", () => {
  let usernameInput, passwordInput, submitButton, errorMessage, roleee;

  beforeEach(() => {
    const rendered = render(<Login />);

    usernameInput = screen.getByTestId(/usernameId/i);
    passwordInput = screen.getByTestId(/passwordId/i);
    errorMessage = screen.getByTestId(/errorTestId/i);
    roleee = screen.getAllByRole("textbox");
    submitButton = screen.getByText("Login", { selector: "button" });
  });
  afterEach(cleanup);

  test("submitting the form with short username should display error message", () => {
    fireEvent.change(usernameInput, { target: { value: "us" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);
    // expect(roleee).toHaveLength(2)
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
    screen.logTestingPlaygroundURL();
    fireEvent.click(submitButton);
    expect(errorMessage.innerHTML).toEqual(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
    // expect(screen.getByText('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.')).toBeInTheDocument();
    // expect(screen.getByText('ername should be at least 3 characters and password should be at least 6 characters')).not.toBeInTheDocument();
  });
});

describe("test login component by screenshot", () => {
  test("snapshot should match", () => {
    const rendered = render(<Login />); // Re-render the component after changing input value
    const usernameInput = screen.getByTestId(/usernameId/i);

    const submitButton = screen.getByText("Login", { selector: "button" });
    fireEvent.change(usernameInput, { target: { value: "gaylord" } });

    const updatedComponent = rendered.asFragment();
    expect(updatedComponent).toMatchSnapshot("usernameChangedInput");
  });

  test("snapshot should match after changing password input and clicking submit", () => {
    const { container } = render(<Login />); // Render the component

    // Find input elements and button

    const passwordInput = screen.getByTestId(/passwordId/i);
    const submitButton = screen.getByText("Login", { selector: "button" });
    const errorMessage = screen.getByTestId(/errorTestId/i);
    // Change password input value
    fireEvent.change(passwordInput, { target: { value: "hey" } });

    // Simulate form submission
    fireEvent.click(submitButton);
    expect(errorMessage.innerHTML).toEqual(
      "Username and password are required"
    );
    // Check the rendered output
    expect(container).toMatchSnapshot("passwordChange");
  });
});
// describe('test MyComponent', () => {
//   test('test component w/ snapshot', () => {
//     const tree = renderer
//       .create(<Login />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   function forEach(items, callback) {
//     for (let index = 0; index < items.length; index++) {
//       callback(items[index]);
//     }
//   }

// });
