import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  // get and click the Sign In button
  await page.getByRole("link", { name: "Sign In" }).click();

  // check the heading => "Sign In"
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  // locate the email, password and fill the values
  await page.locator("[name=email]").fill("7000@7000.com");
  await page.locator("[name=password]").fill("70007000");

  // get and click the Log In button
  await page.getByRole("button", { name: "Log In" }).click();

  // tell that user successfully signed in
  await expect(page.getByText("Sign In Successful")).toBeVisible();

  // after signing in links were added so checking that
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});

test("should allow the user to register", async ({ page }) => {
  const testEmail = `test_register_${
    Math.floor(Math.random() * 90000) + 10000
  }@test.com`;
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Create an Account" }).click();
  await expect(
    page.getByRole("heading", { name: "Create an Account" })
  ).toBeVisible();

  await page.locator("[name=firstName]").fill("test_firstName");
  await page.locator("[name=lastName]").fill("test_lastName");
  // random email everytime
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("test_password");
  await page.locator("[name=confirmPassword]").fill("test_password");

  await page.getByRole("button", { name: "Create Account" }).click();

  await expect(page.getByText("Registration Successful!")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});
