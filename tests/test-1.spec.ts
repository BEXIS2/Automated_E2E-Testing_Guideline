import { test, expect } from "@playwright/test";
import { user } from "../auth/users";
import login from "../auth/login";

test.beforeEach(async ({ page }) => {
    await login(page, user);
});

test("test", async ({ page }) => {
    
});
