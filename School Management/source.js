var students = [];

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    let x = 20;
    let nameInputEl = document.getElementById('name');
    let idInputEl = document.getElementById('idNumber');
    let gpaInputEl = document.getElementById('gpa');
    // Validation for input
    inputValidation(nameInputEl.value, idInputEl.value, gpaInputEl.value);
    // insert student
    insertStudent(nameInputEl.value, idInputEl.value, gpaInputEl.value);

    // Show success message
    showMessage('success');

    var table = document.getElementById("tbl");
    var row = table.insertRow(1);
    var Sname = row.insertCell(0);
    var Sid = row.insertCell(1);
    var Sgpa = row.insertCell(2);
    Sid.innerHTML = idInputEl.value;
    Sname.innerHTML = nameInputEl.value;
    Sgpa.innerHTML = gpaInputEl.value;

});

document.getElementById('delete').addEventListener('click', (e) => {
    e.preventDefault();
    let nameInputEl = document.getElementById('name');
    let idInputEl = document.getElementById('idNumber');
    let gpaInputEl = document.getElementById('gpa');
    inputValidation(nameInputEl.value, idInputEl.value, gpaInputEl.value);
    for (let i = 0, L = students.length; i < L; i++) {
        if (students[i].name == nameInputEl.value && students[i].id == idInputEl.value && students[i].gpa == gpaInputEl.value) {
            showMessage2('success');
            /*  DeleteRow(nameInputEl.value, idInputEl.value, gpaInputEl.value); */
            students.splice(i, 1);
        }
    }

});

function DeleteRow(name, id, gpa) {
    var table = document.getElementById("tbl");
    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var sname = row.cells[0];
        var sid = row.cells[1];
        var sgpa = row.cells[2];
        if (sname == name && sid == id && sgpa == gpa) {
            table.deleteRow(i);
            rowsno--;
        }
    }
}

document.getElementById('update').addEventListener('click', (e) => {
    e.preventDefault();
    let nameInputEl = document.getElementById('name');
    let idInputEl = document.getElementById('idNumber');
    let gpaInputEl = document.getElementById('gpa');
    inputValidation(nameInputEl.value, idInputEl.value, gpaInputEl.value);
    for (let i = 0, L = students.length; i < L; i++) {
        if (students[i].name == nameInputEl.value && students[i].id == idInputEl.value && students[i].gpa == gpaInputEl.value) {
            alert('Enter the new info');
            students[i].name = document.getElementById('name');
            students[i].id = document.getElementById('idNumber');
            students[i].gpa = document.getElementById('gpa');

            showMessage3('success');
        }
    }
});

function inputValidation(name, id, gpa) {
    // check for the value of each element
    let x = 30;

    if (name == '') {
        alert('Please insert the student name');
    }

    if (id == '') {
        alert('Please insert the student id number');
    }

    if (gpa == '') {
        alert('Please insert the student gpa');
    }
}

function insertStudent(name, id, gpa) {
    let student = {
        name: name,
        id: id,
        gpa: gpa,
    };
    students.push(student);
    console.log('students array: ', students);
}

function showMessage(event) {
    if (event == 'success') {
        alert('Student added!')
    } else {
        alert('Failed to add student')
    }
}

function showMessage2(event) {
    if (event == 'success') {
        alert('Student Removed!')
    } else {
        alert('Failed to delete student')
    }
}

function showMessage3(event) {
    if (event == 'success') {
        alert('Student Updated!')
    } else {
        alert('Failed to update student')
    }
}