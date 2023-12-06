import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SignUp from "../Sign_Up";
import { supabase } from "../../supabaseClient";

jest.mock("../../supabaseClient", () => ({
  supabase: {
    auth: {
      signUp: jest.fn(),
    },
    from: jest.fn(() => ({
      upsert: jest.fn(),
    })),
  },
}));

// Mock the window.alert function
const mockAlert = jest.fn();
window.alert = mockAlert;

const mockUser = {
  email: "test@example.com",
  password: "testpassword",
};

describe("SignUp Component", () => {
  test("Renders Sign Up form", () => {
    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </MemoryRouter>
    );

    const registerText = screen.getAllByText(/Register/i);
    const accountText = screen.getAllByText(/your account/i);

    registerText.forEach((text) => expect(text).toBeInTheDocument());
    accountText.forEach((text) => expect(text).toBeInTheDocument());

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign Up/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Are you a member\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In Here!/i)).toBeInTheDocument();
    expect(screen.getByText(/Back To Home/i)).toBeInTheDocument();
  });

  test("Handles Sign Up form submission with success", async () => {
    // Mock the signUp function
    supabase.auth.signUp.mockResolvedValueOnce({
      data: { user: { id: "testUserId" } },
      error: null,
    });

    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </MemoryRouter>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: mockUser.email },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: mockUser.password },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));

    // Wait for the form to be submitted
    await waitFor(() => {
      expect(supabase.auth.signUp).toHaveBeenCalledWith({
        email: mockUser.email,
        password: mockUser.password,
      });
    });

    // Check if the alert function was called with the success message
    expect(mockAlert).toHaveBeenCalledWith("Sign Up Success!");
  });

  test("Handles Sign Up form submission with error", async () => {
    // Mock the signUp function
    const errorMessage = "Email already taken";
    supabase.auth.signUp.mockResolvedValueOnce({
      data: null,
      error: { message: errorMessage },
    });

    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </MemoryRouter>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: mockUser.email },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: mockUser.password },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));

    // Wait for the form to be submitted
    await waitFor(() => {
      expect(supabase.auth.signUp).toHaveBeenCalledWith({
        email: mockUser.email,
        password: mockUser.password,
      });
    });

    // Check if the alert function was called with the error message
    expect(mockAlert).toHaveBeenCalledWith(errorMessage);
  });
});
