
## Overview
In this take-home assignment, I focused on restructuring the monorepo into a pattern I would actually use in a real-world application. There is a a lot shifted around from the original assignment, but the original idea of what the page presented as the goal remains the same.

## Key Takeaways

### Frontend Design
MaterialUI has always been pretty helpful for spinning up something that looks great fast. Its my go-to for when I don't have a designer to work with, but I can eyeball it too. The `/features` directory is similar to how I would set up a frontend, but I understand people have many different ways of laying out their frontend. I can usually adapt to a company's standard, but will continue to be structural while doing so.

### Backend Search
I decided to perform the search functionality, including sorting and pagination on the backend. My reasoning for this was because of this note in the assignment: 

```"Assume we have a database of hundreds of thousands of advocates we need to search through."```

That immediately suggested server-side search, sorting, and pagination to avoid performance bottlenecks on the client.
Rather than loading all advocates into state and filtering on the front-end, I handled the filtering logic on the backend to simulate how a real API would work under scale.


## What I would have done if I had more time

### Actual DB and SQL query
After implementing `/server/search/search.service.ts`, I realized that adding an actual database would have been a cleaner and more realistic choice.
I would have written migrations for an advocates table (with UUID primary keys) and proper indexes on searchable fields like `last_name`, `city`, and `years_of_experience`.
A well-indexed SQL query could handle row-matching, sorting, and pagination much more efficiently than an in-memory array.

### Time spent
I admittedly spent more than the suggested amount of time refining this, but I wanted the resulting interface to feel intuitive and production-ready.
Rather than limiting the search bar to a single column, I made it search across multiple advocate fields (first name, last name, city, degree, etc.), since that’s what a user would naturally expect.

### Unit Testing
Just wanted to make a note here that I prefer to write unit test coverage on key application logic. `/server/search/search.service.ts` is a great candidate for full unit test coverage. I just didn't want to spend time getting mocks setup.