# General Structure

## Idea for application

-   Create habits form -User input for habits they want -Date of how long they
    want to do said habits -Option to do with friends
-   Personal page -Current habit challenge -Past habit challenges (successful or
    not)
    -   Museum
-   Current habit challenge page
    -   Day's todo checklist
    -   Full challenge view
    -   Snack bar telling them they have new art in gallery when completed
-   Past habit challenges page
    -   Full challenge view
-   Art Museum
    -   Galleries created for each challenge
    -   Each gallery has artwork collected from each habit
    -   If uncompleted day, missing artwprk (titled & empty frame)
-   Friends (last)
    -   Friends with their success rate
    -   Ability to send them an encouragement(??)

## Data Needed

-   Who are you (the user)?
-   Username to login
-   Password to login
-   User input for habits
-   User input for dates
-   Who is everyone else?
-   Habits
-   Dates
-   Completed habits
-   Uncompleted habits
-   Artwork collected
-   Success rate

### Data Structure

-   User: object
    -   username(string)
    -   userID(number)
-   Challenges(Array)
-   Challenge: object
    -   Habits(Array of strings)
    -   Array
    -   Completed in time (boolean)
    -   DatesCompleted(array)
    -   Start date(number)
    -   End date(number)
-   Art museum: object
    -   galleries(array) //start with placeholders for amount of days, replace
        with art when completed (was last task for day?)
    -   gallery(array)
    -   paintings(object)
        -   image(img)
        -   title(string)
        -   artist(string)
        -   id(string)
-   Other users: object //hold off rn -username(string) -userID(number) -success
    rating(number) -friends?(boolean)

Derived State: - success rating(number)

### Redux

//what actions do I take to edit state? //name what it is doing to state

## Components

-   `FormPage`
-   `PersonalPage`
-   `ChallengePage`
-   `ChallengeDisplay`
-   `HistoryPage`
-   `MuseumPage`
-   `ArtDisplay`
-   `LoginPage`
-   `FriendsPage` hold off for now

## Technologies:

### API

-   Rijksmuseum
-   API Key: L93w4I9H
-   GET URL:
    https://www.rijksmuseum.nl/api/en/collection?key=L93w4I9H&imgonly=true&ps=100&toppieces=true
-   Further documentation: https://data.rijksmuseum.nl/object-metadata/api/
    (collection API)
-   Notes: Possibly just generate random page number (1-20) and then a random
    number (1-100) after that

### Date NPM

-   Day.js
