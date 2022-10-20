### Test assignment

1. Working with mockups ( HTML/CSS). You will find Figma project and source code here.
a. There is only one page with a deliberately minimized set of styles and components to keep the
test assignment as short as possible.

2. Working with REST API (GET). You will find API documentation (OpenAPI) here.
a. Implement the “Working with a GET request” block according to the mockup and API
documentation. Display 6 users on the API request result page. The "Show more" button
should be hidden when the last page of API query results is reached. Users are sorted by
registration date (the newest first).
b. To display radio buttons on the registration form, use the GET /positions method from the API
documentation.

3. Working with REST API (POST) – registration form block “Working with a POST Request”
a. Implement front-end validation in accordance with mockups and API documentation.
b. Implement the business logic of the registration form in accordance with mockups and API
documentation.
c. After successful registration, update the list of users in the “Working with a GET request” block.
If the “Show more” button has been clicked (i.e. more than one page of users has been loaded
from the API), collapse all and display only the first page of the result of the GET request. As a
result, the new user will be displayed first and you will be able to check the correctness of the
form without reloading the page.

4. Website optimization (bonus task). Minimize and optimize css, js, images, etc. To do this, you need to
deploy your work on any hosting available to you and send any domain available to you to it.
a. Check your work using Google Page Speed and make sure your work is in the green zone.
b. Check your work using Google Chrome Performance Audit / Lighthouse and make sure your
work is in the green zone for Performance, Best practices, SEO (mobile and desktop for 3G).
c. Check your work using Webpagetest and make sure the scores are close to AAAAAA.