# Login credentials
You may need to login to run some tests and access data. To do so, please follow below instructions.

## Setting up your environment
In the file explorer, please find the file named `.env` and replace the placeholders with your credentials and save the file.
```bash
export BASE_URL="url"
export LOGIN_USERNAME="username"
export LOGIN_EMAIL="email"
export LOGIN_PASSWORD="password"
```
## Login
To log in with the provided credentials, you will need to insert some code in your test. The inserted code will open the URL saved in `BASE_URL` and navigate to login page and log in with the provided credentials in `USERNAME` and `PASSWORD`.

To begin with, start a new recording and then close the browser. It should create a file with below code:
```TypeScript
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
// Recording...
});
```
Now, you may go ahead and insert below code just after the first line:
```TypeScript
import { user } from "../auth/users";
import login from "../auth/login";

test.beforeEach(async ({ page }) => {
    await login(page, user);
    await page.goto(process.env.BASE_URL);
});
```
You may also get rid of `// Recording...` in the test file now.
After insertion, you will end up with a file with the below code:
```TypeScript
import { test, expect } from '@playwright/test';
import { user } from "../auth/users";
import login from "../auth/login";

test.beforeEach(async ({ page }) => {
    await login(page, user);
});

test('test', async ({ page }) => {

});
```

To continue recording, you need to put your cursor in the test block and click on "Record at cursor" in Testing menu.
