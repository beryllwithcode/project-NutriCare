import { test, expect } from "@playwright/test";

test("Sign Up Successfully", async ({ page }) => {
  await page.goto("https://nutri-care.vercel.app/");
  await expect(
    page.getByRole("button", { name: "Signup" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Signup" }).first().click();
  await expect(
    page.getByRole("heading", { name: "Register your account" })
  ).toBeVisible();
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Up" })).toBeVisible();
  await expect(page.getByText("Are you a member? Sign In")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "< Back To Home" })
  ).toBeVisible();
  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill("Agus");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("agus@nutricare.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("nutricare123");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Agus$/ })
      .getByRole("button")
  ).toBeVisible();
});

test("Sign Up Failed: Please fill out this field", async ({ page }) => {
  await page.waitForTimeout(3000);
  await page.goto("https://nutri-care.vercel.app/");
  await expect(
    page.getByRole("button", { name: "Signup" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Signup" }).first().click();
  await expect(
    page.getByRole("heading", { name: "Register your account" })
  ).toBeVisible();
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Up" })).toBeVisible();
  await expect(page.getByText("Are you a member? Sign In")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "< Back To Home" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^NamePlease fill out this field\.$/ })
      .getByRole("paragraph")
  ).toBeVisible();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^EmailPlease fill out this field\.$/ })
      .getByRole("paragraph")
  ).toBeVisible();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Please fill out this field\.$/ })
      .getByRole("paragraph")
  ).toBeVisible();
});

test("Sign Up Failed: Email is already registered. Please Sign In!", async ({
  page,
}) => {
  await page.waitForTimeout(3000);
  await page.goto("https://nutri-care.vercel.app/");
  await expect(
    page.getByRole("button", { name: "Signup" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Signup" }).first().click();
  await expect(
    page.getByRole("heading", { name: "Register your account" })
  ).toBeVisible();
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Up" })).toBeVisible();
  await expect(page.getByText("Are you a member? Sign In")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "< Back To Home" })
  ).toBeVisible();
  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill("Agus");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("agus@nutricare.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("nutricare123");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(page.getByRole("alert")).toBeVisible();
  await expect(page.getByText("Email is already registered.")).toBeVisible();
});
