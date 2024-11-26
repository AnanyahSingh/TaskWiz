import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  userFeedback: string = '';

  constructor() {}

  ngOnInit() {}

  submitFeedback(): void {
    if (this.userFeedback.trim()) {
      console.log('User Feedback:', this.userFeedback);
      alert('Thank you for your feedback!');
      this.userFeedback = ''; // Clear the input field
    } else {
      alert('Please enter your feedback before submitting.');
    }
  }
}
