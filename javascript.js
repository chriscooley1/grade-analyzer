function analyzeGrades(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);

    const average = total / grades.length;

    const highest = Math.max(...grades);

    const lowest = Math.min(...grades);

    const passing = average >= 60;

    const result = {
        total: total,
        average: average.toFixed(1),
        highest: highest,
        lowest: lowest,
        passing: passing
    };

    return result;
}

const grades = [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99];
const result = analyzeGrades(grades);
console.log(result);
