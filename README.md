# Personal Dashboard

## What is this?/Who is it for?
NOTE: 20201019 renamed the repo https://github.com/JamieBort/CalendarWebsite to https://github.com/JamieBort/PersonalDashboard.

One website for things that have to do with my professional productivity and health. Including, but not limited to:
1. GitHub calendar graph.
2. Similar images for going to the gym, working, etc. Feed all/many calendar events into it?
3. BG data/milestones.
4. Which days I run. Which days I lift weights. Which days I stretch. To that end, see this [search phrase](https://calendar.google.com/calendar/r/search?q=Export%20calendar%20to%20csv%20-%20look%20at%20trends).
5. [The calendar in HackerRank](https://www.hackerrank.com/jamiebort). See screengrab of 'Submissions' below. It might not be the doc I need/want. [The HackerRank API docs](https://www.hackerrank.com/work/apidocs#!/Introduction/options_intro_api).
![HackerRankCalendar](https://github.com/JamieBort/CalendarWebsite/blob/master/images/HackerRankCalendarGraph)

**The sources of information are going to be:**
1. The Dexcom API. Failing that, or until I get it working, it will be a spreadsheet that I'll generate periodically from their app. Also, the name of the branch to develop this is 'Dexcom'.
2. The GitHub API for the GitHub calendar. The name of the branch to develop this is 'GitCalendar'.
3. The Google Calendar API for the Google calendar. The name of the branch to develop this is 'GoogleCalendar'.
4. The Google Spreadsheet API for my gym spreadsheet. The name of the branch to develop this is 'GymSpreadsheet'.

The first version, or starting point of this website is based on this repository [github-calendar](https://github.com/IonicaBizau/github-calendar).

**The following are copied from the GitCalendar/github-calendar/example directory:**
1. CalendarWebsite/css/
2. CalendarWebsite/js/
3. CalendarWebsite/index.html

Once this is functional, remove the bookmarked pages [here](chrome://bookmarks/?id=1558).

[The Trello Card associated with this project](https://trello.com/c/XdNG65rY/154-calendarwebsite).

## My View of this Project.
I envision this site to be something I can navigate to from at least my computer. Eventually I will be able to navigate to it from other devices such as my phone. And maybe that will be it. Ideally I'll load the page without entering any credentials. But this may not be possible. At which point I will be able to view on the one page all the information I care to see.

Description:include in website:
1. my weight in my website 170 lbs
2. Last eye check-up
3. Last physical
4. a1c

## Explanation of files and directories
In order as they appear in the repo.

**Note to self** - refer to https://github.com/JamieBort/LearningDirectory/blob/master/README.md#explanation-of-other-files-and-directories-in-this-repository for consistent wording.

#### OriginalGitCalendar   directory
`This directory is for the original files that I used to create the GitHubCalendar feature of my website.`

#### css                   directory
The styles.

#### dist                  directory
To be filled in.

#### images                directory
To be filled in.

#### js                    directory
To be filled in.

#### lib                   directory
To be filled in.

#### .gitignore            file
To be filled in.

#### README.md             file
To be filled in.

#### _config.yml           file
To be filled in.

#### copy_README.md file
Created this morning in advance of modifying this README.md file.

#### index.html file
To be filled in.

#### package-lock.json file
To be filled in.

#### package.json file
To be filled in.
    https://github.com/JamieBort/LearningDirectory#packagejson

## Explanation of other files and directories in this repository.

Licensing Info
To be edited later.

Code of Conduct
To be edited later.

Contributing
To be edited later.

## Next Steps
1.
    Clean up repo so that

    a.
        the **unused branches** are deleted, closed, etc.

    b.
        the **branches** are structured such that:
        
        +-- master/main
            +-- React.js branch with Java back end and database.
            +-- React Native branch with Java back end and database.

    c.
        the **directories** are structured such that:
        
        +-- root directory
            +-- front end directory
            +-- back end directory

    The front end on each branch will will look identical or similar.
    The functionality that it needs is to navigate between pages.
    And display info appropriate to that page.

    Something basic just to make sure
    * it's working as I want and need.
    * and to decide which to use
        * React.js
        * or React Native.

2.
    Then work on getting it behind a password/some sort of security.

3.
    Then bring in the database and back end.

## Status
Currently 
* revamping the readme.md file.
* revamping the master Trello card

## Tasks
* https://trello.com/c/YvoKlspE/681-clean-up-this-personal-dashboard-trello-card
* https://trello.com/c/zy0t4RZY/682-create-a-trello-card-for-each-task-in-this-personal-dashboard-trello-card
* https://trello.com/c/VQ4YGDoX/1115-old-trello-card-stuff-for-the-personal-dashboard
* https://trello.com/c/svOMzdnt/535-how-to-look-at-websites-or-apps-i-am-developing-on-my-phone-before-they-are-live
* https://trello.com/c/C7gQnymV/690-study-todoist-to-see-what-from-it-i-can-use-in-my-personal-dashboard
* ~~**Clean up this card!!**~~ https://trello.com/c/XdNG65rY/154-personal-dashboard
* Figure out the ~~https://trello.com/c/3dYmwmEV/166-calendar-website-business-requirements~~ [Personal Dashboard Business Requirements](https://docs.google.com/document/d/1KQw0Kq4O_SCzxrQZaZg0MucxXqoEE0kOTe9mDmxpD2M/edit#heading=h.k7bx0as6v0ko) for this app. 
* Leaning towards using React-Native over Angular, vanilla JavaScript, or anything else.
* Create a dev branch
* Salvage any work from the other branches
* Work off of only the dev branch until the code is ready to go live on the master branch.
* ~~Update the name of this repo from [`Calendar Website`](https://github.com/JamieBort/CalendarWebsite) to `Personal Dashboard`.~~ Completed 20201019.
* https://trello.com/c/ooLxz9QZ/494-combine-these-two-files
* Remove/delete old branches. See existing trello card for this that was used for another repo.

## Associated Links
* [Personal Dashboard](https://trello.com/c/XdNG65rY/154-personal-dashboard) Trello card.