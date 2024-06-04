# Grade Analyzer

Write a function in javascript that takes an array of assignment grades (integers) and calculates some metrics:

1. Total points earned
2. Average score (assume each assignment is worth 100 points)
3. Highest score
4. Lowest score
5. Based on the average score, determine if they have an overall passing grade (assume 60% is passing)

Return a JSON object that follows this format:

```javascript
Input: [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99]

Output: {
  "total": 1132,
  "average": 80.9,
  "highest": 100,
  "lowest": 37,
  "passing" true,
}
```

NOTE: Your function must not ask the user for input. You can write another function that gets input somehow, but the solution function must take an array of integers and return a JSON object. No alerts, no prompts, and no other user interaction.

## Submission

Submit a link to your code and add a comment with a link to your GitHub Pages page (https://pages.github.com/Links to an external site.).