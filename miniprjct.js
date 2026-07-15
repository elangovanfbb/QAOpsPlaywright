// 1. Array of student objects
let students = [
    { id: 1, name: "Anu", marks: 80 },
    { id: 2, name: "Arun", marks: 45 },
    { id: 3, name: "Vishal", marks: 70 }
];

// 2. Add a new student
function addStudent(id, name, marks) {
    students.push({ id, name, marks });
    console.log("Student added successfully!");
}

// 3. Display all students
function displayStudents() {
    console.log("All Students:");
    students.forEach(student => {
        console.log(student.id, student.name, student.marks);
    });
}

// 4. Find a student by ID
function findStudentById(id) {
    let student = students.find(s => s.id === id);
    if (student) {
        console.log(`Student found: ${student.name}`);
    } else {
        console.log("Student not found");
    }
}

// 5. Filter students with marks > 50
function getTopStudents() {
    let topStudents = students.filter(s => s.marks > 50);
    console.log("Students with marks > 50:");
    topStudents.forEach(s => console.log(s.name));
}

// ----------- Example Usage -----------

// Display all students
displayStudents();

// Add a new student
addStudent(4, "Elangovan", 65);

// Display again
displayStudents();

// Filter students
getTopStudents();

// Find student by ID
console.log("Find student by ID (2):");
findStudentById(2);