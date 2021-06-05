# Personal Dashboard

## What is this?/Who is it for?

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

#### old/ directory
To be filled in.

#### README_Files_From_Old_Branches/ directory
To be filled in.

#### .gitignore file
To be filled in.

#### Progress.md file
* For my personal organization.
* Contains `Next Steps`,`Status`, `Tasks`, and `Associated Links` sections.

## Explanation of other files and directories in this repository.

Licensing Info
To be edited later.

Code of Conduct
To be edited later.

Contributing
To be edited later.

## Branch structure

    +-- master/main (production branch - only work that is mean to go live is merged into here)
        |
        |
        +-- dev (all dev work is off of this branch. not until it passes does it go into master)
            |
            |
            +-- feature branch(es) (a branch for each feature to be developed.)

NOTE: 20201019 renamed the repo https://github.com/JamieBort/CalendarWebsite to https://github.com/JamieBort/PersonalDashboard.


NOTE: The following are copied from the GitCalendar/github-calendar/example directory:
1. CalendarWebsite/css/
2. CalendarWebsite/js/
3. CalendarWebsite/index.html

NOTE: Once this is functional, remove the bookmarked pages here: 

    chrome://bookmarks/?id=1558