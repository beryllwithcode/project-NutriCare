import { test, expect } from "@playwright/test";

test("Login Success", async ({ page }) => {
  await page.goto("https://nutri-care.vercel.app/");
  await expect(
    page.getByRole("button", { name: "Login" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Login" }).first().click();
  await expect(
    page.getByRole("heading", { name: "Sign in to your account" })
  ).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  await expect(page.getByText("Not a member? Sign Up Here!")).toBeVisible();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("user@nutricare.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("nutricare123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^user$/ })
      .getByRole("button")
  ).toBeVisible();
});

test("Login Failed: please fill out this field for email and password", async ({
  page,
}) => {
  await page.goto("https://nutri-care.vercel.app/");
  await expect(
    page.getByRole("button", { name: "Login" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Login" }).first().click();
  await expect(
    page.getByRole("heading", { name: "Sign in to your account" })
  ).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  await expect(page.getByText("Not a member? Sign Up Here!")).toBeVisible();
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^EmailPlease fill out this field\.$/ })
      .getByRole("paragraph")
  ).toBeVisible();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^PasswordPlease fill out this field\.$/ })
      .getByRole("paragraph")
  ).toBeVisible();
});

test("Login Failed: Wrong Email", async ({ page }) => {
  await page.goto("https://nutri-care.vercel.app/");
  await expect(
    page.getByRole("button", { name: "Login" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Login" }).first().click();
  await expect(
    page.getByRole("heading", { name: "Sign in to your account" })
  ).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  await expect(page.getByText("Not a member? Sign Up Here!")).toBeVisible();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("user@nutricaree.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("nutricare123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByRole("alert")).toBeVisible();
  await expect(page.getByRole("alert")).toContainText(
    "Login failed. Please check again!"
  );
});

test("Login Failed: Wrong Password", async ({ page }) => {
  await page.goto("https://nutri-care.vercel.app/");
  await expect(
    page.getByRole("button", { name: "Login" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Login" }).first().click();
  await expect(
    page.getByRole("heading", { name: "Sign in to your account" })
  ).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  await expect(page.getByText("Not a member? Sign Up Here!")).toBeVisible();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("user@nutricare.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("nutricare1234");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByRole("alert")).toBeVisible();
  await expect(page.getByRole("alert")).toContainText(
    "Login failed. Please check again!"
  );
});
