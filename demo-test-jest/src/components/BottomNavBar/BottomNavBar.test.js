import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

import BottomNavBar from "./BottomNavBar";

describe("test login component", () => {
  let usernameInput, passwordInput, submitButton, errorMessage, roleee;

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"), // use real implementation for other functions
    useNavigate: jest.fn(), // mock the useNavigate hook
  }));

  beforeEach(() => {
    render(
      <Router>
        <BottomNavBar />
      </Router>
    );
  });

  describe("Checkitout", () => {
    test("check changing tab", () => {
      const loginTab = screen.getByRole("button", { name: /login/i });
      const tableTab = screen.getByRole("button", { name: /table/i });
      fireEvent.change(loginTab);
    });
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
