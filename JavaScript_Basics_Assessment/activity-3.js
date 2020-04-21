const students = ['Patrick','Conner', 'Aidan'];

for(let i = 0; i < 3; i++){
   const name = prompt('enter a name');
    students.push(name);
}

    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }

