import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import Article from "../Article";

class IntersectionObserverMock {
  observe() {}
  disconnect() {}
}

beforeAll(() => {
  window.IntersectionObserver = IntersectionObserverMock;
});

beforeEach(() => {
  fetchMock.resetMocks();
});

afterAll(() => {
  delete window.IntersectionObserver;
});

test("Renders Article component", async () => {
  render(<Article />);

  await waitFor(() => {
    const welcomeText = screen.getAllByText(/Welcome to/i);
    const nutriCareArticleText = screen.getAllByText(/NutriCare Article/i);

    welcomeText.forEach((text) => expect(text).toBeInTheDocument());
    nutriCareArticleText.forEach((text) => expect(text).toBeInTheDocument());
  });

  const articleHubText = screen.getAllByText(/Health Articles/i);
  const healthierLifestyleText = screen.getAllByText(/healthier lifestyle/i);

  articleHubText.forEach((text) => expect(text).toBeInTheDocument());
  healthierLifestyleText.forEach((text) => expect(text).toBeInTheDocument());
});

test("Fetches and displays articles correctly", async () => {
  render(<Article />);

  await waitFor(() => {
    const nutricareText = screen.getAllByText(/NutriCare/i);
    const articlesText = screen.getAllByText(/Articles/i);

    nutricareText.forEach((text) => expect(text).toBeInTheDocument());
    articlesText.forEach((text) => expect(text).toBeInTheDocument());
  });
});
