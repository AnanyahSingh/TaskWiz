import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  username: string;
  tasks = [
    // Example task objects...
  ];

  constructor(
    private menuCtrl: MenuController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.username = 'Ananya';
  }

  openSidebar() {
    this.menuCtrl.toggle();
  }

  addTask() {
    const newTask = {
      id: this.tasks.length + 1,
      title: `Task ${this.tasks.length + 1}`,
      description: '',
      status: 'Pending',
      reminder: '',
      dueDate: '',
      isFlipped: false,
      isDone: false,
    };
    this.tasks.push(newTask);
    this.showToast('Task added successfully!', 'success');
  }

  flipCard(index: number, event: MouseEvent) {
    // Prevent flip when clicking on checkbox, input fields, or date buttons
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'ION-CHECKBOX' ||
      target.closest('ion-checkbox') ||
      target.tagName === 'ION-INPUT' ||
      target.closest('ion-input') ||
      target.tagName === 'ION-TEXTAREA' ||
      target.closest('ion-textarea') ||
      target.tagName === 'ION-BUTTON' ||
      target.closest('ion-button')
    ) {
      return; // Prevent flip
    }

    this.tasks[index].isFlipped = !this.tasks[index].isFlipped;
  }

  flipAllCardsBack(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.flip-card-front') && !target.closest('.flip-card-back')) {
      this.tasks.forEach((task) => (task.isFlipped = false));
    }
  }

  onInputChange(index: number) {
    this.tasks[index].showActions = true;
  }

  saveTask(task) {
    console.log('Task saved:', task);
    task.showActions = false;
    this.showToast('Task saved successfully!', 'success');
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    this.showToast('Task deleted successfully!', 'danger');
  }

  async openCalendar(type: string, index: number) {
    const alert = await this.alertCtrl.create({
      header: `Set ${type === 'reminder' ? 'Reminder' : 'Due Date'}`,
      inputs: [
        {
          name: 'date',
          type: 'date',
          min: this.getMinDate(), // Set the minimum date as today
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Set',
          handler: (data) => {
            const selectedDate = data.date;

            // Check if the selected date is in the past
            if (selectedDate < this.getMinDate()) {
              this.showToast(`${type === 'reminder' ? 'Reminder' : 'Due Date'} cannot be in the past!`, 'danger');
              return;
            }

            if (type === 'reminder') {
              this.tasks[index].reminder = selectedDate;
              this.sendReminderNotification(selectedDate);
            } else {
              this.tasks[index].dueDate = selectedDate;
              this.checkDueDateNotification(selectedDate);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  getMinDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
  }

  async sendReminderNotification(reminderDate: string) {
    const toast = await this.toastCtrl.create({
      message: `Reminder set for ${reminderDate}`,
      duration: 2000,
      color: 'primary',
    });
    await toast.present();
  }

  async checkDueDateNotification(dueDate: string) {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    if (today === dueDate) {
      const toast = await this.toastCtrl.create({
        message: `Today is the due date for a task!`,
        duration: 3000,
        color: 'warning',
      });
      await toast.present();
    }
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: color,
      // position: 'top', // Show the toast at the top
    });
    await toast.present();
  }

  preventFlip(event: MouseEvent) {
    event.stopPropagation(); // Prevent the event from triggering the flip
  }
}
