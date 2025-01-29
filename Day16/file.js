// Object storing student names and their grades
let students = {
    Ali: 85,
    Sara: 92,
    Ahmed: 78,
    Zainab: 88,
    Bilal: 70
};

// Student name to check
let studentName = "Sara";

// Check if the student exists
if (students[studentName] !== undefined) {
    console.log(`Student: ${studentName}, Grade: ${students[studentName]}`);
} else {
    console.log("Student not found.");
}
