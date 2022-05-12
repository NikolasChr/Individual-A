// Course Class: Represents a course
class Course {
    constructor(title, stream, type, startdate, enddate) {
      this.title = title;
      this.stream = stream;
      this.type = type;
      this.startdate = startdate;
      this.enddate = enddate;
    }
  }

  // UI Class: Handle UI Tasks
  class UI {
    static displayCourses() {
      const storedCourses = [
          {
              title: 'Javascript',
              stream: 'part-time',
              type: 'OOP',
              startdate: '22-1-2023',
              enddate: '22-7-2023'
          },
          {
            title: 'Python',
            stream: 'full-time',
            type: 'Back-end',
            startdate: '22-4-2023',
            enddate: '22-10-2023'
        }
      ]       
      const courses = storedCourses;
      courses.forEach((course) => UI.addCourseToList(course));
    }
  // Add courses to the list
    static addCourseToList(course) {
      const list = document.getElementById('course-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${course.title}</td>
        <td>${course.stream}</td>
        <td>${course.type}</td>
        <td>${course.startdate}</td>
        <td>${course.enddate}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteCourse(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
     // Creating a Div in html , exactly where i want it , before the form 
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.getElementById('course-form');
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('stream').value = '';
      document.getElementById('type').value = '';
      document.getElementById('startdate').value = '';
      document.getElementById('enddate').value = '';
    }
  }
  
 
  // Event: Display Courses
  document.addEventListener('DOMContentLoaded',UI.displayCourses);
  
  // Event: Add a Course
  document.getElementById('course-form').addEventListener('submit', (e) => {
    e.preventDefault();
  

    // Get form values
    const title = document.getElementById('title').value;
    const stream = document.getElementById('stream').value;
    const type = document.getElementById('type').value;
    const startdate = document.getElementById('startdate').value;
    const enddate = document.getElementById('enddate').value;
  
    // Validate
    if(title === '' || stream === '' || type === ''|| startdate === ''|| enddate === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      // Instatiate course
      const course = new Course(title, stream, type, startdate, enddate);
  
      // Add course to UI
      UI.addCourseToList(course);
  
  
      // Show success message
      UI.showAlert('Course Added !', 'success');
  
      // Clear fields
      UI.clearFields();
    }
  });
  
  
  document.getElementById('course-list').addEventListener('click', (e) => {
   
    UI.deleteCourse(e.target);
  
 
    // Show success message
    UI.showAlert('Course Removed !', 'success');
  });


