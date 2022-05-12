class Student {
    constructor(firstname, lastname, dateofbirth, tuitionfees) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.dateofbirth = dateofbirth;
      this.tuitionfees = tuitionfees;
    }
  }
  
  class UI {
    static displayStudents() {
        const storedStudents= [
            {
               firstname: 'Nikos',
               lastname: 'Matsamplokos',
               dateofbirth: '24-2-1993',
               tuitionfees: '308 $'
            },
            {
                firstname: 'Nikos',
                lastname: 'Kalantas',
                dateofbirth: '24-5-1992',
                tuitionfees: '350 $'
          },
            {
               firstname: 'Kostas',
               lastname: 'Kavourdiris',
               dateofbirth: '24-2-1953',
               tuitionfees: '350 $'
          },
            {
            firstname: 'John',
            lastname: 'Doe',
            dateofbirth: '24-2-1953',
            tuitionfees: '350 $'
       }
        ]       
      const students = storedStudents;
  
      students.forEach((student) => UI.addStudentToList(student));
    }
  
    static addStudentToList(student) {

      const list = document.getElementById('student-list');
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${student.firstname}</td>
        <td>${student.lastname}</td>
        <td>${student.dateofbirth}</td>
        <td>${student.tuitionfees}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteStudent(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.getElementById('student-form');
      container.insertBefore(div, form);
  
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.getElementById('firstname').value = '';
      document.getElementById('lastname').value = '';
      document.getElementById('dateofbirth').value = '';
      document.getElementById('tuitionfees').value = '';
    }
  }
  
  document.addEventListener('DOMContentLoaded', UI.displayStudents);

  document.getElementById('student-form').addEventListener('submit', (e) => {
    e.preventDefault();
  

    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const dateofbirth = document.getElementById('dateofbirth').value;
    const tuitionfees = document.getElementById('tuitionfees').value;
  
    
    if(firstname === '' || lastname === '' || dateofbirth === '' || tuitionfees === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
     
      const student = new Student(firstname, lastname, dateofbirth, tuitionfees);
  
      UI.addStudentToList(student);
  
      UI.showAlert('Student Added !', 'success');

      UI.clearFields();
    }
  });
  
  
  document.getElementById('student-list').addEventListener('click', (e) => {
   
    UI.deleteStudent(e.target);

    UI.showAlert('Student Removed !', 'success');
  });