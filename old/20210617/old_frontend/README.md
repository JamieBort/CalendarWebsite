# ~~frontend~~ old_frontend

**NOTE:** 
1. renamed `frontend` to `old_frontend`
2. then moved `PersonalDashboard/old_frontend/attempt05/frontend/` to `PersonalDashboard/frontend/`

## Status
Currently in the `java_setup` branch.
Navigate to `file:///Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/attempt04/index.html` in the browser.
Open up `./personal_projects/PersonalDashboard/` in vs code.
Run `./personal_projects/PersonalDashboard/backend/src/main/java/personal_dashboard/backend/BackendApplication.java` in vs code.
Then the index.html can make a call to `http://localhost:8085/topics`.


* First attempt - Running into `cors` issue with these.

    * `frontend_working_navigation` is a react app with working navigation.

    * next up: getting front end server working.

    * `nextjs-blog.js` spun up quickly. Used https://nextjs.org/learn/basics/create-nextjs-app/setup to do it.

    * Next up: create a different app using nextjs. And then incorporate navigation.

    * Having trouble making api calls. running into cors issue.

    * `vanilla_javascript` trying to address the cors issue.

* Second attempt - going to follow [this tutorial](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website) up through `Pre-rendering and Data Fetching`.
Stopped off at the end of the [Pre-rendering and Data Fetching](https://nextjs.org/learn/basics/data-fetching/request-time) lesson.

* Third attempt - Copy of Second Attempt (where I stopped off at the end of the [Pre-rendering and Data Fetching](https://nextjs.org/learn/basics/data-fetching/request-time) lesson) in an attempt to adapt it to a fetch to an external api.
**NOTE:** this didn't work for me either.
I am going to table this `attempt03` directory and this `react_js` branch for now.
And I will next attempt to make an call to the back end directly - assume the issues I am running into will not occur if I make a call to the back end directly...
If that fails, I will work on a course that will walk me through the process of making a fetch using JavaScript and possibly a library and/or framework.

* Fourth attempt - works. See [Status](https://github.com/JamieBort/PersonalDashboard/tree/react_js/frontend#status) above.

* Fifth attempt - using this to create a React.js frontend.