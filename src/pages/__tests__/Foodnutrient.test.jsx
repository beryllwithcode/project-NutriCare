import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";
import FoodNutrient from "./FoodNutrient";

// Mocking the fetch function
fetchMock.enableMocks();

describe("FoodNutrient Component", () => {
  it("fetches and displays food data", async () => {
    // Mock the response for fetchFoodsData
    const mockFoodsData = [
      { id: 1, title: "Food 1", image: "image1.jpg" },
      { id: 2, title: "Food 2", image: "image2.jpg" },
    ];
    fetchMock.mockResponseOnce(JSON.stringify({ recipes: mockFoodsData }));

    // Mock the response for fetchNutritionData
    const mockNutritionData = {
      calories: 300,
      carbs: 20,
      fat: 15,
      protein: 10,
    };
    fetchMock.mockResponses(
      ...mockFoodsData.map((food) =>
        JSON.stringify({ ...mockNutritionData, foodId: food.id })
      )
    );

    // Render the component
    render(<FoodNutrient />);

    // Wait for the data to be loaded
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2); // Two API calls for food and nutrition data
    });

    // Check if the data is displayed correctly
    mockFoodsData.forEach((food) => {
      expect(screen.getByText(food.title)).toBeInTheDocument();
      expect(screen.getByAltText("Article Thumbnail")).toHaveAttribute(
        "src",
        food.image
      );
      expect(screen.getByText("Calories")).toBeInTheDocument();
      expect(screen.getByText("Carbs")).toBeInTheDocument();
      expect(screen.getByText("Fat")).toBeInTheDocument();
      expect(screen.getByText("Protein")).toBeInTheDocument();
    });
  });

  it("stores food data in local storage", async () => {
    // Mock the response for fetchFoodsData
    const mockFoodsData = [
      { id: 1, title: "Food 1", image: "image1.jpg" },
      { id: 2, title: "Food 2", image: "image2.jpg" },
    ];
    fetchMock.mockResponseOnce(JSON.stringify({ recipes: mockFoodsData }));

    // Mock the response for fetchNutritionData
    const mockNutritionData = {
      calories: 300,
      carbs: 20,
      fat: 15,
      protein: 10,
    };
    fetchMock.mockResponses(
      ...mockFoodsData.map((food) =>
        JSON.stringify({ ...mockNutritionData, foodId: food.id })
      )
    );

    // Render the component
    render(<FoodNutrient />);

    // Wait for the data to be loaded
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2); // Two API calls for food and nutrition data
    });

    // Check if the data is stored in local storage
    const storedFoods = JSON.parse(localStorage.getItem("foods"));
    expect(storedFoods).toEqual(
      mockFoodsData.map((food) => ({
        ...food,
        nutrition: mockNutritionData,
      }))
    );
  });
});
