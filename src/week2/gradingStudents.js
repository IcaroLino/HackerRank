/**
 * Round each student's grade according to these rules:
 * If the difference between the grade and the next multiple of 5 is less than 3,
 * round  up to the next multiple of 5.
 * If the value of grade is less than 38, no rounding occurs.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

export default function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38 || (grade % 5) < 3) return grade;
    return grade + 5 - (grade % 5);
  });
}
