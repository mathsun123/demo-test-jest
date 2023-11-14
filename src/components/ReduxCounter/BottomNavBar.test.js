import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";

describe("BottomNavBar component", () => {
  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <BottomNavBar />
      </MemoryRouter>
    );
  });

  test("renders navigation labels and icons", () => {
    render(
      <MemoryRouter>
        <BottomNavBar />
      </MemoryRouter>
    );

    const loginTab = screen.getByRole("button", { name: /login/i });
    const tableTab = screen.getByRole("button", { name: /table/i });

    expect(tableTab).toBeInTheDocument();
    expect(loginTab).toBeInTheDocument();

    expect(screen.getAllByTestId("AccessibleForwardIcon")).toHaveLength(3); // Assuming each action has an icon
    expect(
      screen.getAllByTestId("AccessibleForwardIcon").length
    ).toBeGreaterThan(1); // Assuming this test id element exist in doc
    expect(screen.getAllByTestId("AccessibleForwardIcon").length).not.toBe(1); // Assuming this test id element exist once
  });

  test("verifies state changes on action click", () => {
    const { getByText } = render(
      <MemoryRouter>
        <BottomNavBar />
      </MemoryRouter>
    );

    // Simulate a click on the 'Table' action
    fireEvent.click(getByText("Table"));
    expect(getByText("Table")).toHaveClass("Mui-selected");
    expect(getByText("Login")).not.toHaveClass("Mui-selected");

    fireEvent.click(getByText("Login"));
    expect(getByText("Login")).toHaveClass("Mui-selected");
    expect(getByText("Table")).not.toHaveClass("Mui-selected");
  });
});
