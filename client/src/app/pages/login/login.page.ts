
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  showToast = false;
  toastMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private toastController: ToastController) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      console.log('Login successful', this.loginForm.value);
      
      this.toastMessage = 'Login successful!';
      this.showToast = true;

      this.router.navigate(['/tasks']);
    } else {
      this.toastMessage = 'Invalid email or password!';
      this.showToast = true;
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
