class Assignment {
    constructor(title, description, subdatetime, oralmark, totalmark) {
      this.title = title;
      this.description = description;
      this.subdatetime = subdatetime;
      this.oralmark = oralmark;
      this.totalmark = totalmark;
    }
  }
  
  class UI {
    static displayAssignments() {
        const storedAssignments = [
            {
               title: 'Assignment-Calculator',
               description: 'Html-Css-Javascript',
               subdatetime: '23-02-2032',
               oralmark: 20,
               totalmark: 100
            },
            {
                title: 'Individual project part A',
                description: 'Html-Javascript',
                subdatetime: '23-02-2022',
                oralmark: 20,
                totalmark: 100
             },
            {
                title: 'Individual project part B',
                description: 'Html-Javascript',
                subdatetime: '21-02-2032',
                oralmark: 20,
                totalmark: 100
          }
        ]       
      const assignments = storedAssignments;
  
      assignments.forEach((assignment) => UI.addAssignmentToList(assignment));
    }
  
    static addAssignmentToList(assignment) {
      const list = document.getElementById('assignment-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${assignment.title}</td>
        <td>${assignment.description}</td>
        <td>${assignment.subdatetime}</td>
        <td>${assignment.oralmark}</td>
        <td>${assignment.totalmark}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteAssignment(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.getElementById('assignment-form');
      container.insertBefore(div, form);
  
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      document.getElementById('subdate').value = '';
      document.getElementById('oralmark').value = '';
      document.getElementById('totalmark').value = '';
    }
  }
  
  document.addEventListener('DOMContentLoaded', UI.displayAssignments);

  document.getElementById('assignment-form').addEventListener('submit', (e) => {
    e.preventDefault();
  

    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const subdate = document.getElementById('subdate').value;
    const oralmark = document.getElementById('oralmark').value;
    const totalmark = document.getElementById('totalmark').value;
  
    
    if(title === '' || description === '' || subdate === ''|| oralmark === ''|| totalmark === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
     
      const assignment = new Assignment(title, description, subdate, oralmark, totalmark);
  
      UI.addAssignmentToList(assignment);
  
      UI.showAlert('Assignment Added !', 'success');

      UI.clearFields();
    }
  });
  
  
  document.getElementById('assignment-list').addEventListener('click', (e) => {
   
    UI.deleteAssignment(e.target);

    UI.showAlert('Assignment Removed !', 'success');
  });