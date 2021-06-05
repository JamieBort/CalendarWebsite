# Progress

## Status
### Currently
**NOTE:** 
1. renamed `frontend` to `old_frontend`
2. then moved `PersonalDashboard/old_frontend/attempt05/frontend/` to `PersonalDashboard/frontend/`

* Run locally
    * Currently in the `react_js` branch.
    * Navigate to `file:///Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/attempt04/index.html` in the browser.
    * Open up `./personal_projects/PersonalDashboard/` in vs code.
    * Run `./personal_projects/PersonalDashboard/backend/src/main/java/personal_dashboard/backend/BackendApplication.java` in vs code.
    * Then in the browser, navigate to `file:///Users/jamiebort/Documents/DevFiles/personal_projects/PersonalDashboard/frontend/attempt04/index.html`
    * and select the `Fetch` button to log to the console a call to `http://localhost:8085/topics`.

* **branches** structure:    

        +-- master/main
            +-- dev
                +-- React.js branch with Java back end and database. (react_js)
                    +-- "host" branch (called host) for figuring out how to deploy and host both the front and back ends on a service such as heroku
                +-- React Native branch with Java back end and database. (react_native) (doesn't exist yet)

* **directories** structure:

        +-- root directory (PersonalDashboard/)
            +-- front end directory (frontend/)
            +-- back end directory (backend/)

### Completed
* Cleaning up the root directory in the master branch
    [Clean up the root directory in the master branch](https://trello.com/c/eoj2x4Zs/1117-clean-up-the-root-directory-in-the-master-branch) Trello card.
* Removing old branches.
* revamping the readme.md file.
* revamping the master Trello card

## Next Steps
1.
    ~~Clean up repo~~ so that

    a.
        ~~[Remove old branches](https://trello.com/c/5LzmS26g/1116-clean-up-github-repo-branches-for-personal-dashboard-repo)~~. Done

    b.
        the **branches** are structured such that:
        
        +-- master/main
            +-- dev
                +-- React.js branch with Java back end and database. (react_js)
                +-- React Native branch with Java back end and database. (react_native)

    The front end on each branch will look identical or similar.

    The functionality that it needs is to navigate between pages.
    
    And display info appropriate to that page.

    c.
        the **directories** are structured such that:
        
        +-- root directory (PersonalDashboard/)
            +-- front end directory (frontend/)
            +-- back end directory (backend/)

2.
    ~~Then set up the back end~~. Done
    
    Deleted both
    * the `java_setup` (local) branch and
    * the `remotes/origin/java_setup` remote branch.

3.
    Then set up the frontend. Something basic just to make sure
    * it's working as I want and need.
    * and to decide which to use
        * React.js
        * or React Native.
        
        The front end on each branch will look identical or similar.

        The functionality that it needs is to navigate between pages.
    
        And display info appropriate to that page.

4.
    Deploy both on platform such as Heroku so that I can use React.js and React Native on my phone. To make a decision about which to use.

5.
    Then work on getting it behind a password/some sort of security.

6.
    Then bring in the database(s).

## Tasks
### Not Done
* https://trello.com/c/YvoKlspE/681-clean-up-this-personal-dashboard-trello-card
* https://trello.com/c/zy0t4RZY/682-create-a-trello-card-for-each-task-in-this-personal-dashboard-trello-card
* https://trello.com/c/VQ4YGDoX/1115-old-trello-card-stuff-for-the-personal-dashboard
* https://trello.com/c/svOMzdnt/535-how-to-look-at-websites-or-apps-i-am-developing-on-my-phone-before-they-are-live
* https://trello.com/c/C7gQnymV/690-study-todoist-to-see-what-from-it-i-can-use-in-my-personal-dashboard
* Figure out the [Personal Dashboard Business Requirements](https://docs.google.com/document/d/1KQw0Kq4O_SCzxrQZaZg0MucxXqoEE0kOTe9mDmxpD2M/edit#heading=h.k7bx0as6v0ko) for this app.
* Create a dev branch - see [1.b.](https://github.com/JamieBort/PersonalDashboard/blob/master/Progress.md#next-steps) of `Next Steps`.
* Work off of only the dev branch until the code is ready to go live on the master branch. Move to a best practices/methodology document, file, etc.
* https://trello.com/c/ooLxz9QZ/494-combine-these-two-files

### Completed Tasks
* Salvage any work from the other branches - see [1.a.](https://github.com/JamieBort/PersonalDashboard/blob/master/Progress.md#next-steps) of `Next Steps`.
* [Clean up the root directory in the master branch](https://trello.com/c/eoj2x4Zs/1117-clean-up-the-root-directory-in-the-master-branch)
* https://trello.com/c/5LzmS26g/1116-clean-up-github-repo-branches-for-personal-dashboard-repo
* ~~Maybe move `Next Steps`,`Status`, and `Tasks` to another~~
* ~~Leaning towards using React-Native over Angular, vanilla JavaScript, or anything else.~~
* ~~Update the name of this repo from [`Calendar Website`](https://github.com/JamieBort/CalendarWebsite) to `Personal Dashboard`.~~ Completed 20201019.
* ~~**Clean up this card!!**~~ https://trello.com/c/XdNG65rY/154-personal-dashboard

## Associated Links
* [Personal Dashboard](https://trello.com/c/XdNG65rY/154-personal-dashboard) Trello card.
* [Personal Dashboard Business Requirements](https://docs.google.com/document/d/1KQw0Kq4O_SCzxrQZaZg0MucxXqoEE0kOTe9mDmxpD2M/edit#) Google Drive doc.

## Resources
* https://trello.com/c/NFRSx1Q6/171-api-professional-development

## Content
* https://trello.com/c/BBsYOyDg/1114-content-for-the-personal-dashboard

## APIs to use
* https://trello.com/c/VpBLMhGh/1113-apis-to-use-for-the-personal-dashboard

## Research
* Items to research.
    * Which framework to use for the front end, if any.
    * Which files to keep out of github. https://trello.com/c/GYruL063/167-sensitive-files-to-keep-off-of-github
    * https://trello.com/c/muKx92hA/572-read-up-on-rest-vs-soap-vs-graph-api-requests
    * Postman: https://trello.com/c/mmkFuAOA/346-get-familiar-with-postman?menu=filter&filter=label:Home
    * google chrome bookmarks: chrome://bookmarks/?q=API
    * articles in pocket https://app.getpocket.com/tags/professional-development/all
    * https://trello.com/c/APC6cRAy/792-questions
    * **HOSTING/DEPLOYING**
        * [Hosting](https://github.com/JamieBort/LearningDirectory/tree/master/Hosting) directory in the `LearningDirectory` repo.
        * host full stack on budge: https://www.youtube.com/watch?v=Kx_1NYYJS7Q
        * [What's the best way to deploy a Spring Boot + React project?](https://www.reddit.com/r/java/comments/iseggg/whats_the_best_way_to_deploy_a_spring_boot_react/) Reddit article.
        * **single war file**: https://medium.com/bb-tutorials-and-thoughts/how-to-build-react-with-java-backend-for-production-72f8634bb067
        * services
            * docker
            * azure
                * https://medium.com/bb-tutorials-and-thoughts/how-to-run-and-deploy-react-with-nodejs-backend-on-azure-app-services-b853f6e5234f
            * heroku
                * in a **single war file**: https://medium.com/analytics-vidhya/how-to-package-your-react-app-with-spring-boot-41432be974bc
                * react on heroku
                    * [Create and Deploy React App on Heroku - Step by Step Guide](https://www.youtube.com/watch?v=tA4Fl1dZgjc) YouTube video.
                    * [How to deploy React app to Heroku?](https://www.geeksforgeeks.org/how-to-deploy-react-app-to-heroku/)
                * ~~java~~ spring boot on heroku
                    * https://www.youtube.com/watch?v=k8z4UzV55ew
            * aws
                * [react java aws](https://www.google.com/search?q=react+java+aws&oq=react+java+aws&aqs=chrome..69i57j69i64j69i60.4481j0j7&sourceid=chrome&ie=UTF-8) internet search.
                    * https://www.youtube.com/watch?v=i-hoSg8iRG0
                * their tutorial/documentation https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/
                * [AWS — Deploying React With Java App On Elastic Beanstalk](https://medium.com/bb-tutorials-and-thoughts/aws-deploying-react-with-java-app-on-elastic-beanstalk-fb8a96b90c4)
                    
        * [react java app environment](https://www.google.com/search?q=react+java+app+environment&sxsrf=ALeKk02lfintBkr0btlJLgAfno0lFEjdHQ%3A1622861450090&ei=iua6YMnzBO2m_Qb-vKeIDA&oq=react+java+app+env&gs_lcp=Cgdnd3Mtd2l6EAMYATIICCEQFhAdEB4yCAghEBYQHRAeOgcIABBHELADOgQIIxAnOgYIABAWEB46CAgAEBYQChAeUOVYWLmPAWC5nwFoBXACeACAAWeIAdYGkgEDNy4ymAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=gws-wiz) internet search.
            * https://www.youtube.com/watch?v=qFy9v454GyY (**azure**)
        * [host react java app](https://www.google.com/search?q=host+react+java+app&oq=host+react+java+app&aqs=chrome..69i57.5716j0j7&sourceid=chrome&ie=UTF-8) internet search.
            * https://rapidapi.com/blog/how-to-deploy-a-react-app/ Lists 7 sites to use.
        * [react java mysql](https://www.google.com/search?sxsrf=ALeKk03n0e2r3wxxyzzDqO07VpjVYQPngw%3A1622857519844&lei=L9e6YN71MufD_QaDqaTYDg&q=react%20java%20mysql&ved=2ahUKEwieyfavr__wAhXnYd8KHYMUCesQsKwBKAV6BAgaEAY&biw=1280&bih=666) internet search.
            * https://mukundmadhav.medium.com/build-and-deploy-react-app-with-spring-boot-and-mysql-6f888eb0c600 **package in a single Jar file**. (see `Package React app with Spring Boot` section)
    * **NAVIGATION**
        * React.js
            * [React.js navigation](https://www.google.com/search?q=React.js+navigation&sxsrf=ALeKk03iKMqix2xOWxiNBHkPf2imhJnXaw%3A1622848547087&ei=I7S6YP3IBNSx5NoPl_SW4Ak&oq=React.js+navigation&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yAggAOgcIABBHELADOgQIABAeUPSRA1julQNgp5gDaAFwAngAgAFYiAHGApIBATSYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=gws-wiz&ved=0ahUKEwi95rD5jf_wAhXUGFkFHRe6BZwQ4dUDCA4&uact=5) internet search.
            * I am currently using https://reactrouter.com/web/guides/quick-start
                * also found this tutorial for that: https://www.educative.io/blog/react-router-tutorial
                * also found this tutorial for that: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm talks about deep linking
            * also found 
        * React Native
            * https://reactnavigation.org/
    * **FETCHING**
        * react
            * https://www.andreasreiterer.at/connect-react-app-rest-api/ (from https://stackoverflow.com/a/58497307/8210460)
                * **good info here**: https://www.andreasreiterer.at/
    * **RESTful CRUD With Java and MySQL**
        * https://www.javahelps.com/2017/11/restful-crud-with-java-and-mysql-in.html
    * **AUTHENTICATION/SECURITY**
        * spring security
            * [what is spring security](https://www.google.com/search?q=what+is+spring+security&oq=what+is+spring+security&aqs=chrome..69i57.2829j0j7&sourceid=chrome&ie=UTF-8) internet search
            * https://github.com/callicoder/spring-security-react-ant-design-polls-app **Of specific interest - spring security and JWT**
                * Part 1: Bootstrapping the Project and creating the basic domain models and repositories
                * Part 2: Configuring Spring Security along with JWT authentication and Building Rest APIs for Login and SignUp
                * Part 3: Building Rest APIs for creating Polls, voting for a choice in a Poll, retrieving user profile etc
                * Part 4: Building the front-end using React and Ant Design
    * **CORS**
        * there is already a CORS Trello card and/or cors research documentation somewhere else
        * https://javascript.info/fetch-crossorigin

Other. From: https://trello.com/c/d6R7jZVj/421-successful-internet-of-things-dashboard
>[How I built an accessible IoT dashboard](https://medium.com/@jason.webb/building-an-accessible-iot-dashboard-67a1633398a3)

>Key phrases:
Personal Dashboard (my project)
Accessibility

>The above from Mili L. 20200915 `#resources` channel: https://devsrtp.slack.com/archives/CAD7NBM46/p1600178718020200

