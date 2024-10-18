import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupForm: FormGroup;
  showToast = false;
  toastMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private toastController: ToastController) {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async onSignup() {
    if (this.signupForm.valid) {
      console.log('Signup successful', this.signupForm.value);

      this.toastMessage = 'Signup successful!';
      this.showToast = true;

      // After successful signup, navigate to login
      this.router.navigate(['/login']);
    } else {
      this.toastMessage = 'Invalid input! Please check your details.';
      this.showToast = true;
    }
  }
}
