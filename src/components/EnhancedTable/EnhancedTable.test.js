import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import * as axios from "axios";
import EnhancedTable from "./EnhancedTable";
import mockData from "./mock.json";
jest.mock("axios");
describe("MyComponent", () => {
  test("fetches data on button click", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: mockData.data })
    );

    render(<EnhancedTable />);
    const searchBtn = screen.getByRole("button", { name: /search/i });

    // Find and click the button
    fireEvent.click(searchBtn);
    // let rows = screen.getAllByTestId("data_table_rowId");
    // Check if the API call is made
    expect(axios.get).toHaveBeenCalledWith("https://api.example.com/data");
    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(axios.get).not.toHaveBeenCalledWith("https://api.example.com/data2");
    // Check if data is rendered after API call
    await waitFor(() => {
      expect(screen.getAllByTestId("data_table_rowId")).toHaveLength(5);
    });
  });

  // it('handles API call failure', async () => {
  //   axios.get.mockRejectedValue(new Error('Failed to fetch'));

  //   const { getByText } = render(<MyComponent />);

  //   fireEvent.click(getByText('Fetch Data'));

  //   // Check if error is logged when API call fails
  //   await waitFor(() => {
  //     expect(console.error).toHaveBeenCalledWith('Failed to fetch data', expect.any(Error));
  //   });
  // });
});
