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

const mockUser = {
  name: "Test User",
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

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
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
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});
    supabase.auth.signUp.mockResolvedValueOnce({
      data: { user: { id: "testUserId" } },
    });

    render(
      <MemoryRouter initialEntries={["/sign-up"]}>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: mockUser.name },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: mockUser.email },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: mockUser.password },
    });

    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));

    await waitFor(
      () => {
        expect(supabase.auth.signUp).toHaveBeenCalledWith({
          email: mockUser.email,
          password: mockUser.password,
        });
        expect(mockAlert).toHaveBeenCalledWith("Registration successful!.");
      }
      // { timeout: 10000 }
    );

    mockAlert.mockRestore();
  });

  test("Handles Sign Up form submission with error", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
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

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: mockUser.name },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: mockUser.email },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: mockUser.password },
    });

    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));

    await waitFor(
      () => {
        expect(supabase.auth.signUp).toHaveBeenCalledWith({
          email: mockUser.email,
          password: mockUser.password,
        });
        expect(console.error).toHaveBeenCalled();
        expect(console.error.mock.calls[0][0].message).toBe(errorMessage);
      }
      // { timeout: 10000 }
    );
  });
});
