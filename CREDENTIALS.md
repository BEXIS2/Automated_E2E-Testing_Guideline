# Login credentials
You may need to login to run some tests and access data. To do so, please follow below instructions.

## Setting up your environment
In the file explorer, please find the file named `.env` and replace the placeholders with the URL of your choice and your credentials and save the file.
```bash
export BASE_URL="url"
export LOGIN_USERNAME="username"
export LOGIN_EMAIL="email"
export LOGIN_PASSWORD="password"
```
## Login
To log in with the provided credentials, you will need to insert some code in your test. The inserted code will open the URL saved in `BASE_URL` and navigate to login page and log in with the provided credentials in `LOGIN_USERNAME` and `LOGIN_PASSWORD`. It will be run before each test block.

After you are done with your recording, you may go ahead and insert below code just after the first line:
```TypeScript
import { user } from "../auth/users";
import login from "../auth/login";

test.beforeEach(async ({ page }) => {
    await login(page, user);
});
```

After the insertion, you will end up with a file similar to the below example:
```TypeScript
import { test, expect } from '@playwright/test';
import { user } from "../auth/users";
import login from "../auth/login";

test.beforeEach(async ({ page }) => {
    await login(page, user);
});

...
...
```
