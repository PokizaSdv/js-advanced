// Person Class:
// constructor(name: string): This method will be used to construct a new Person instance with a name. The name should be a string value.
// introduceYourself(): This instance method should console log a generic self-introduction such as "Hello, my name is (name)".
// getRole(): This instance method should return 'Person' indicating the role of this instance.
// countInstances(): This static method should keep track of how many instances of the Person class have been created. Increment the count each time a new instance is created.

class Person {
    static instances = 0;

    constructor(name) {
        this.name = name;
        Person.instances++;
    }

    introduceYourself() {
        console.log(`Hello, my name is ${this.name}`);
    }

    getRole() {
        return "Person";
    }

    static countInstances() {
        return Person.instances;
    }
}

//   Student Class extends Person:
// constructor(name: string): This method will be used to construct a new Student instance with a name. The student should also have an empty GradeBook upon creation.
// introduceYourself(): This method should console log a student-specific self-introduction, such as "Hello, my name is (name) and I am a student". This method overrides the introduceYourself() from the Person class.
// getGradeBook(): This method should return the student's GradeBook. The GradeBook is an instance of the GradeBook class which is a collection of subjects and grades.
// getGrade(subject: string): This method should return an array of grades that the student received for a specific subject. If the subject does not exist in the GradeBook, it should return an empty array.
// schoolUniform(): This method should return a standard student attire such as "School shirt and pants".
// getRole(): This method should return 'Student' indicating the role of this instance. This method overrides the getRole() from the Person class.
// countInstances(): This static method should keep track of how many instances of the Student class have been created.

class Student extends Person {
    static instances = 0;

    constructor(name) {
        super(name);
        this.gradeBook = new GradeBook();
        Student.instances++;
    }

    introduceYourself() {
        console.log(`Hello, my name is ${this.name} and I am a student`);
    }

    getGradeBook() {
        return this.gradeBook;
    }

    getGrade(subject) {
        return this.gradeBook.getGrades(subject);
    }

    schoolUniform() {
        return "School shirt and pants";
    }

    getRole() {
        return "Student";
    }

    static countInstances() {
        return Student.instances;
    }
}

//   Teacher Class extends Person:
// constructor(name: string, subject: string): This method will be used to construct a new Teacher instance with a name and a subject that they teach. The subject should be a string value.
// introduceYourself(): This method should console log a teacher-specific self-introduction, such as "Hello, my name is (name) and I teach (subject)". This method overrides the introduceYourself() from the Person class.
// teach(student: Student, grade: number): This method is used to add a grade to a student's GradeBook for the subject that the teacher teaches. The grade is a number representing the grade that the student received.
// getSubject(): This method should return the subject that the teacher is responsible for teaching.
// getStudentGrade(student: Student): This method should return an array of grades a student has received for the subject the teacher is responsible for. If the student hasn't received a grade for that subject, it should return an empty array.
// dressCode(): This method should return a standard teacher attire such as "Formal shirt and pants".
// getRole(): This method should return 'Teacher' indicating the role of this instance. This method overrides the getRole() from the Person class.
// countInstances(): This static method should keep track of how many instances of the Teacher class have been created.

class Teacher extends Person {
    static instances = 0;

    constructor(name, subject) {
        super(name);
        this.subject = subject;
        Teacher.instances++;
    }

    introduceYourself() {
        console.log(
            `Hello, my name is ${this.name} and I teach ${this.subject}`
        );
    }

    teach(student, grade) {
        student.gradeBook.addGrade(this.subject, grade);
    }

    getSubject() {
        return this.subject;
    }

    getStudentGrade(student) {
        return student.gradeBook.getGrades(this.subject);
    }

    dressCode() {
        return "Formal shirt and pants";
    }

    getRole() {
        return "Teacher";
    }

    static countInstances() {
        return Teacher.instances;
    }
}

//   GradeBook Class
// constructor(): This method will be used to construct a new GradeBook instance. The GradeBook should be an empty object upon creation.
// addGrade(subject: string, grade: number): This method is used to add a grade for a specific subject. If the subject doesn't exist in the GradeBook, it should create an array for the subject.
// getGrades(subject: string): This method should return an array of grades for a specific subject. If there are no grades for that subject, it should return an empty array.
// getAllGrades(): This method should return the whole GradeBook which is an object where each property is a subject and the value is an array of grades.
// format(): This static method should return a format for storing grades in the GradeBook.

class GradeBook {
    constructor() {
        this.grades = {};
    }

    addGrade(subject, grade) {
        if (!this.grades[subject]) {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }

    getGrades(subject) {
        if (this.grades[subject]) {
            return this.grades[subject];
        } else {
            return [];
        }
        // return this.grades[subject] || [];
    }

    getAllGrades() {
        return this.grades;
    }

    static format() {
        return {};
    }
}

//   School Class
// constructor(name: string): This method will be used to construct a new School instance with a name.
// enroll(student: Student): This method is used to add a student to the school. The student should be an instance of the Student class.
// expel(student: Student): This method is used to remove a student from the school. The student should be an instance of the Student class.
// hire(teacher: Teacher): This method is used to add a teacher to the school. The teacher should be an instance of the Teacher class.
// fire(teacher: Teacher): This method is used to

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }

    enroll(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            console.log("Error");
        }
    }

    expel(student) {}

    hire(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.push(teacher);
        } else {
            console.log("Error");
        }
    }

    fire(teacher) {}
}
