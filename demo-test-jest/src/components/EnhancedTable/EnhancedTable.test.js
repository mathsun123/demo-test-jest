import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EnhancedTable from "./EnhancedTable";

describe("test login component", () => {
  let usernameInput, passwordInput, submitButton, errorMessage, roleee;

  beforeEach(() => {
    render(<EnhancedTable />);
  });

  test("Checkitout", () => {
    // screen.logTestingPlaygroundURL();
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
