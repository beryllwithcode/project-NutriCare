import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SignIn from "../Sign_in";
import { supabase } from "../../supabaseClient";

jest.mock("../../supabaseClient", () => ({
  supabase: {
    auth: {
      signInWithPassword: jest.fn(),
    },
  },
}));

const mockUser = {
  email: "test@example.com",
  password: "testpassword",
};

describe("SignIn Component", () => {
  test("Renders Sign In form", () => {
    render(
      <MemoryRouter initialEntries={["/sign-in"]}>
        <Routes>
          {" "}
          {/* Replace <Route> with <Routes> */}
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </MemoryRouter>
    );
    const signinText = screen.getAllByText(/Sign in/i);
    const accountText = screen.getAllByText(/to your account/i);

    signinText.forEach((text) => expect(text).toBeInTheDocument());
    accountText.forEach((text) => expect(text).toBeInTheDocument());

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign In/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Not a member\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up Here!/i)).toBeInTheDocument();
    expect(screen.getByText(/Back To Home/i)).toBeInTheDocument();
  });

  test("Handles Sign In form submission", async () => {
    // Mock the signInWithPassword function
    supabase.auth.signInWithPassword.mockResolvedValue({ error: null });

    render(
      <MemoryRouter initialEntries={["/sign-in"]}>
        <Routes>
          {" "}
          {/* Replace <Route> with <Routes> */}
          <Route path="/sign-in" element={<SignIn />} />
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
    fireEvent.click(screen.getByRole("button", { name: /Sign In/i }));

    // Wait for the form to be submitted
    await waitFor(() => {
      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: mockUser.email,
        password: mockUser.password,
      });
    });
  });
});
