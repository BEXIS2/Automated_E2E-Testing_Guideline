module.exports = async function (page, user) {
    // Go to the main website
    await page.goto(process.env.BASE_URL);

    // Click on Login
    const loginLink = await page.locator('#navbarCollapse').getByRole('link', { name: 'Login' });
    await loginLink.waitFor();
    await loginLink.click();

    // Enter user credentials
    const usernameElement = await page.locator('#UserName')
    await usernameElement.waitFor();
    await usernameElement.fill(user.username);

    const passwordElement = await page.locator('#Password');
    await passwordElement.waitFor();
    await passwordElement.fill(user.password);

    // Login
    await page.locator('[type=submit]').click()
};