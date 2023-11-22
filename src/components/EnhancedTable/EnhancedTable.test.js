import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import * as axios from "axios";
import EnhancedTable from "./EnhancedTable";
import mockData from "./mock.json";
jest.mock("axios");

describe("Testing Enhanced Table", () => {

  test("fetches data on button click", async () => {

    // replace simulate axios api call with mock data
    axios.get
      .mockResolvedValueOnce({ status: 200, data: mockData.data })
      .mockResolvedValueOnce({ status: 200, data: mockData.data });

    render(<EnhancedTable />);

    // Find the Button
    const searchBtn = screen.getByRole("button", { name: /search/i });

    // Click the button
    fireEvent.click(searchBtn);


    // Check if data is rendered after API call
    await waitFor(() => {

      // Check if the API call is made
      expect(axios.get).toHaveBeenCalledWith("https://fakestoreapi.com/products?limit=20");
      expect(axios.get).toHaveBeenCalledWith("https://fakestoreapi.com/products?limit=30");

      // How many times has been called 
      expect(axios.get).toHaveBeenCalledTimes(2);


      expect(axios.get).not.toHaveBeenCalledWith("https://random");

      // if yes table should contain 5 row
      expect(screen.getAllByTestId("data_table_rowId")).toHaveLength(5);
    });
  });

});
