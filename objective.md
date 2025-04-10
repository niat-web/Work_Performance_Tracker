```markdown
# Work_Performance_Tracker

## Objective
This project provides a simple web-based application for tracking work performance, including goal setting, performance reviews, and a progress dashboard. It utilizes HTML, CSS, and JavaScript to create an interactive user interface. The JavaScript code handles form submissions, data manipulation, dynamic updates, and charting using Chart.js. The application also features a dark/light mode toggle for improved user experience.

## Output
<iframe src="https://github.com/niat-web/Work_Performance_Tracker" height="1000" width="300" title="Work_Performance_Tracker"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Chart.js

## Features to Implement
- Dark/Light Mode Toggle
- Goal and Objective Tracking (add, display goals)
- Performance Reviews (add, display reviews)

## UI Enhancements
- Improve styling for notifications.
- Add input validation feedback for all forms.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement Dark Mode Toggle | Users can switch between dark and light themes. The toggle button displays the correct icon and text. |
| Implement Goal Form Submission | Users can submit a goal with a name, deadline, and key metrics. The goal is added to the goal list. |
| Implement Review Form Submission | Users can submit a performance review with employee name, reviewer type, performance rating, and comments. The review is added to the review list. |
| Implement Progress Dashboard | The dashboard displays the number of goals completed, reviews given, and the average rating. |
| Implement Chart.js integration | A bar chart visually represents the performance metrics from the dashboard. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to access and modify HTML elements, such as form inputs, lists, and dashboard elements. |
| Event Listeners | Used to handle form submissions and button clicks (e.g., dark mode toggle). |
| Form Validation | Used to ensure that form fields are filled out correctly before submission. |
| Array Manipulation | Used implicitly when updating and iterating through goalList and reviewList children properties. |
| Chart.js Integration | Used to create and update the performance chart based on dashboard data. |
| Local Storage | Not implemented, but would be useful for persisting theme and input data between sessions |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Chart.js | N/A | Used for creating dynamic charts within the web application. No external API endpoint is used, as Chart.js is a client-side JavaScript library. |
```