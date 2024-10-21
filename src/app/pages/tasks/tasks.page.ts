import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; // For managing the menu

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  username: string;
  tasks = [
    { title: 'Task Title', description: 'About the task', status: 'Pending', showActions: false },
    { title: 'Task Title', description: 'About the task', status: 'In Progress', showActions: false },
    { title: 'Task Title', description: 'About the task', status: 'Completed', showActions: false }
  ];

  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {
    this.username = 'Ananya'; 
  }

  openSidebar() {
    this.menuCtrl.toggle(); 
  }

  addTask() {
    console.log('Add Task button clicked');
  }

  onInputChange(index: number) {
    this.tasks[index].showActions = true; 
  }

  saveTask(task) {
    console.log('Task saved:', task);
    task.showActions = false; 
  }

  deleteTask(task) {
    console.log('Task deleted:', task);
    this.tasks = this.tasks.filter(t => t !== task); // Remove the task from the array
  }
}
