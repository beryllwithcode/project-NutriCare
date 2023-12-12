// import React from "react";
// import { render, waitFor, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import fetchMock from "jest-fetch-mock";
// import FoodNutrient from "../Food_Nutrient";

// fetchMock.enableMocks();

// class IntersectionObserverMock {
//   observe() {}
//   disconnect() {}
// }

// beforeAll(() => {
//   window.IntersectionObserver = IntersectionObserverMock;
// });

// afterAll(() => {
//   delete window.IntersectionObserver;
// });

// describe("FoodNutrient Component", () => {
//   it("fetches and displays food data", async () => {
//     const mockFoodsData = [
//       { id: 1, title: "Food 1", image: "image1.jpg" },
//       { id: 2, title: "Food 2", image: "image2.jpg" },
//     ];
//     fetchMock.mockResponseOnce(JSON.stringify({ recipes: mockFoodsData }));

//     const mockNutritionData = {
//       calories: 300,
//       carbs: 20,
//       fat: 15,
//       protein: 10,
//     };
//     fetchMock.mockResponses(
//       ...mockFoodsData.map((food) =>
//         JSON.stringify({ ...mockNutritionData, foodId: food.id })
//       )
//     );

//     render(<FoodNutrient />);

//     await waitFor(() => {
//       expect(fetchMock).toHaveBeenCalledTimes(3);
//     });

//     mockFoodsData.forEach((food) => {
//       expect(screen.getByText(food.title)).toBeInTheDocument();
//       expect(screen.getByAltText("Article Thumbnail")).toHaveAttribute(
//         "src",
//         food.image
//       );
//       expect(screen.getByText("Calories")).toBeInTheDocument();
//       expect(screen.getByText("Carbs")).toBeInTheDocument();
//       expect(screen.getByText("Fat")).toBeInTheDocument();
//       expect(screen.getByText("Protein")).toBeInTheDocument();
//     });
//   });

//   it("stores food data in local storage", async () => {
//     const mockFoodsData = [
//       { id: 1, title: "Food 1", image: "image1.jpg" },
//       { id: 2, title: "Food 2", image: "image2.jpg" },
//     ];
//     fetchMock.mockResponseOnce(JSON.stringify({ recipes: mockFoodsData }));

//     const mockNutritionData = {
//       calories: 300,
//       carbs: 20,
//       fat: 15,
//       protein: 10,
//     };
//     fetchMock.mockResponses(
//       ...mockFoodsData.map((food) =>
//         JSON.stringify({ ...mockNutritionData, foodId: food.id })
//       )
//     );

//     render(<FoodNutrient />);

//     await waitFor(() => {
//       expect(fetchMock).toHaveBeenCalledTimes(3);
//     });

//     const storedFoods = JSON.parse(localStorage.getItem("foods"));
//     expect(storedFoods).toEqual(
//       mockFoodsData.map((food) => ({
//         ...food,
//         nutrition: mockNutritionData,
//       }))
//     );
//   });
// });
