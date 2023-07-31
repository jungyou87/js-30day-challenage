let students = {
    Jon : {
        age: 27,
        online: false
    },
    Jack : {
        age: 32,
        online: true
    },
    Jenn: {
        age: 48,
        online: false
    },
    Liz: {
        age: 19,
        online: true
    }
}

let studentsArr = [];

let studentsName = Object.keys(students);

for (let i = 0; i < studentsName.length; i++) {
    const student = studentsName[i];
    // console.log(student);
    studentsArr.push(student)
    let studentKeys = Object.keys(students[student])
    // console.log(studentKeys);
    for (let i = 0; i < studentKeys.length; i++) {
        const key = studentKeys[i];
        studentsArr.push(key)
    }
}

console.log(studentsArr);