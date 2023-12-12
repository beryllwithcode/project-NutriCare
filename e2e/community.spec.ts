import { test, expect } from "@playwright/test";

test("Cant add New Discussion when user didnt logged in", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("button", { name: "Login" }).first()
  ).toBeVisible();
  await page.getByRole("link", { name: "Community" }).first().click();
  await expect(page.locator("#discussion")).toContainText("Let's Discuss");
  await expect(page.locator("#discussion")).toContainText(
    "Discuss anything, ask questions, find supports, and connect with others."
  );
  const isButtonDisabled = await page.$eval(
    "#newDiscussionButton",
    (button) => (button as HTMLButtonElement).disabled
  );
  expect(isButtonDisabled).toBe(true);
});

test("Adding new discussion", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("button", { name: "Login" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Login" }).first().click();
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
  await page.getByRole("link", { name: "Community" }).first().click();
  await expect(
    page.getByRole("button", { name: "New Discussion" })
  ).toBeVisible();
  await page.getByRole("button", { name: "New Discussion" }).click();
  await expect(page.getByRole("heading")).toContainText(
    "Create New Discussion"
  );
  await page.locator("input").click();
  await page.locator("input").fill("End to End Testing for Adding Discussion");
  await page.locator("textarea").click();
  await page.locator("textarea").fill("Description for adding discussion");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Create" }).click();
  await expect(page.locator("#discussion")).toContainText(
    "End to End Testing for Adding Discussion"
  );
  await expect(page.getByText("Post by user")).toBeVisible();
});

test("Adding comment to the discussion", async ({ page }) => {
  await page.waitForTimeout(3000);

  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("button", { name: "Login" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Login" }).first().click();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("user@nutricare.com");
  await page.getByLabel("Email").press("Tab");
  await page.getByLabel("Password").fill("nutricare123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^user$/ })
      .getByRole("button")
  ).toBeVisible();
  await page.getByRole("link", { name: "Community" }).first().click();
  await expect(page.locator("#discussion")).toContainText(
    "End to End Testing for Adding Discussion"
  );
  await expect(page.locator("#discussion")).toContainText("Post by user");
  await page
    .getByRole("link", { name: "End to End Testing for Adding" })
    .first()
    .click();
  await expect(page.getByPlaceholder(" ")).toBeVisible();
  await page.getByPlaceholder(" ").click();
  await page.getByPlaceholder(" ").fill("Adding Comment");
  await page.getByRole("button", { name: "Post Comments" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await expect(page.getByRole("heading", { name: "Comments" })).toBeVisible();
  await expect(
    page
      .locator("p")
      .filter({ hasText: /^user$/ })
      .locator("span")
  ).toBeVisible();
  await expect(page.getByText("Adding Comment")).toBeVisible();
});

test("Deleting discussion created", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("button", { name: "Login" }).first()
  ).toBeVisible();
  await page.getByRole("button", { name: "Login" }).first().click();
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("user@nutricare.com");
  await page.getByLabel("Email").press("Tab");
  await page.getByLabel("Password").fill("nutricare123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^user$/ })
      .getByRole("button")
  ).toBeVisible();
  await page.getByRole("link", { name: "Community" }).first().click();
  await expect(
    page.getByRole("link", { name: "End to End Testing for Adding" })
  ).toBeVisible();
  await expect(page.getByText("Post by user")).toBeVisible();
  await page
    .getByRole("link", { name: "End to End Testing for Adding" })
    .first()
    .click();
  await expect(page.locator("#discussion")).toContainText(
    "End to End Testing for Adding Discussion"
  );
  await expect(page.locator("#discussion")).toContainText(
    "Description for adding discussion"
  );
  await expect(page.locator("#discussion")).toContainText("by user");
  await expect(
    page.getByRole("button", { name: "Delete Discussion" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Delete Discussion" }).click();
  await expect(page.getByText("Are you sure you want to")).toBeVisible();
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
  await page.getByRole("button", { name: "Delete" }).click();
  await expect(
    page.getByRole("link", { name: "End to End Testing for Adding" })
  ).toBeHidden();
});
