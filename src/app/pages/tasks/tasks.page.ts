import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; // For managing the menu

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  // Add properties for username and tasks
  username: string;
  tasks = [
    { title: 'Task 1', description: 'Description for Task 1', status: 'Pending' },
    { title: 'Task 2', description: 'Description for Task 2', status: 'In Progress' },
    { title: 'Task 3', description: 'Description for Task 3', status: 'Completed' }
  ];

  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {
    // Set the username after user signup/login
    this.username = 'Ananya'; // Replace with dynamic data from authentication
  }

  // Method to open/close the sidebar menu
  openSidebar() {
    this.menuCtrl.toggle(); // This toggles the menu open/closed
  }

  // Method to handle adding a new task (currently just logs to the console)
  addTask() {
    console.log('Add Task button clicked');
    // Add your logic to show a form or redirect to a task creation page
  }

  // Method to handle saving the task (currently just logs to the console)
  saveTask(task) {
    console.log('Task saved:', task);
    // Add logic to save the task
  }

  // Method to delete a task
  deleteTask(task) {
    console.log('Task deleted:', task);
    // Add logic to delete the task
  }

}
