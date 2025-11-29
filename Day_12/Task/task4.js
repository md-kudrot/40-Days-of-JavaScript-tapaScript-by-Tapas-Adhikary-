// 4. Build a Student Management System

// 1. Store student details in an object (name, age, grades).
// 2. Implement a method to calculate the average grade.

const students = {
    name: "kamrujjaman",
    age: 20,
    grades: [80, 90, 60, 50, 70],
    
    averageGrade: function () {

        const gradesArr = this.grades
        let store = 0
        for (let i = 0; i < gradesArr.length ; i++) {
            store += gradesArr[i]
            // console.log(gradesArr[i]);
        }
        return(store / gradesArr.length)
    }
}

const avgGrade = students.averageGrade()



console.log(avgGrade)
