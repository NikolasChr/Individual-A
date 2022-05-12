
class Trainer {
    constructor(firstname, lastname, subject) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.subject = subject;
    }
  }
  
  class UI {
    static displayTrainers() {
        const storedTrainers = [
            {
               firstname: 'Lena',
               lastname: 'Kapetanaki',
               subject: 'HTML-CSS'
            },
            {
                firstname: 'Panos',
                lastname: 'Bozas',
                subject: 'Javascript'
          },
            {
                firstname: 'George',
                lastname: 'Pasparakis',
                subject: 'Programming'
          }
        ]       
      const trainers = storedTrainers;
  
      trainers.forEach((trainer) => UI.addTrainerToList(trainer));
    }
  
    static addTrainerToList(trainer) {
      
      const list = document.getElementById('trainer-list');
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${trainer.firstname}</td>
        <td>${trainer.lastname}</td>
        <td>${trainer.subject}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteTrainer(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.getElementById('trainer-form');
      container.insertBefore(div, form);
  
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.getElementById('firstname').value = '';
      document.getElementById('lastname').value = '';
      document.getElementById('subject').value = '';
    }
  }
  
  document.addEventListener('DOMContentLoaded', UI.displayTrainers);

  document.getElementById('trainer-form').addEventListener('submit', (e) => {
    e.preventDefault();
  

    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const subject = document.getElementById('subject').value;
  
    
    if(firstname === '' || lastname === '' || subject === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
     
      const trainer = new Trainer(firstname, lastname, subject);
  
      UI.addTrainerToList(trainer);
  
      UI.showAlert('Trainer Added !', 'success');

      UI.clearFields();
    }
  });
  
  
  document.getElementById('trainer-list').addEventListener('click', (e) => {
   
    UI.deleteTrainer(e.target);

    UI.showAlert('Trainer Removed !', 'success');
  });