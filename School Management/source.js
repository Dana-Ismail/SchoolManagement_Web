var students = [];

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    let x = 20;
    let nameInputEl = document.getElementById('name');
    let idInputEl = document.getElementById('idNumber');
    let gpaInputEl = document.getElementById('gpa');

    inputValidation2(nameInputEl.value, idInputEl.value, gpaInputEl.value);


});

document.getElementById('delete').addEventListener('click', (e) => {
    e.preventDefault();
    let nameInputEl = document.getElementById('name');
    let idInputEl = document.getElementById('idNumber');
    let gpaInputEl = document.getElementById('gpa');
    inputValidation(nameInputEl.value, idInputEl.value, gpaInputEl.value);
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == idInputEl.value) {
            DeleteRow(students[i].id);
            students.splice(i, 1);

            showMessage2('success');

        }
    }

});

function DeleteRow(id) {
    var table = document.getElementById("tbl");
    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var sid = row.cells[1];
        if (sid == id) {
            table.deleteRow(i);

        }
    }
}
document.getElementById('update').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Enter the updated info');
    let nameInputEl = document.getElementById('name');
    let idInputEl = document.getElementById('idNumber');
    let gpaInputEl = document.getElementById('gpa');
    var j = -99;
    for (i = 0; i < students.length; i++) {
        if (students[i].id == idInputEl.value)
            j = i;
    }
    if (j != -99) {
        students[j].name = nameInputEl.value;
        students[j].id = idInputEl.value;
        students[j].gpa = gpaInputEl.value;
        var table = document.getElementById("tbl");
        if (j == 0) {
            DeleteRow(idInputEl.value);
            var table = document.getElementById("tbl");
            var row = table.insertRow(1);
            var Sname = row.insertCell(0);
            var Sid = row.insertCell(1);
            var Sgpa = row.insertCell(2);
            Sname.innerHTML = nameInputEl.value;
            Sid.innerHTML = idInputEl.value;
            Sgpa.innerHTML = gpaInputEl.value;
        }
        var row = table.rows[j];
        var sname = row.cells[0];
        var sid = row.cells[1];
        var sgpa = row.cells[2];
        sname.innerHTML = nameInputEl.value;
        sid.innerHTML = idInputEl.value;
        sgpa.innerHTML = gpaInputEl.value;

        showMessage3('success');
    } else {
        showMessage3('x');
    }
});

/* document.getElementById('update').addEventListener('click', (e) => {
    e.preventDefault();
    let idInputEl = document.getElementById('idNumber');
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == idInputEl.value) {
            alert('Enter the new info');

            let nameInputEl = document.getElementById('name');
            let gpaInputEl = document.getElementById('gpa');

            students[i].name = nameInputEl.value;
            students[i].id = idInputEl.value;
            students[i].gpa = gpaInputEl.value;
            /*  var table = document.getElementById("tbl");
            var row = table.rows[i];
            var sname = row.cells[0];
            var sid = row.cells[1];
            var sgpa = row.cells[2];



        }
    }
}); */

function inputValidation(name, id, gpa) {
    // check for the value of each element
    let x = 30;

    if (name == '') {
        alert('Please insert the student name');
        return;
    }

    if (id == '') {
        alert('Please insert the student id number');
        return;
    }

    if (gpa == '') {
        alert('Please insert the student gpa');
        return;
    }
}

function inputValidation2(name, id, gpa) {
    // check for the value of each element
    let x = 30;

    if (name == '') {
        alert('Please insert the student name');
        return;
    }

    if (id == '') {
        alert('Please insert the student id number');
        return;
    }

    if (gpa == '') {
        alert('Please insert the student gpa');
        return;
    }

    insertStudent(name, id, gpa);
    showMessage('success');
    var table = document.getElementById("tbl");
    var row = table.insertRow(1);
    var Sname = row.insertCell(0);
    var Sid = row.insertCell(1);
    var Sgpa = row.insertCell(2);
    Sid.innerHTML = id;
    Sname.innerHTML = name;
    Sgpa.innerHTML = gpa;
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