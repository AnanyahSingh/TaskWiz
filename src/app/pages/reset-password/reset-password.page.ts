import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset-password.page.html',  // Corrected template URL
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPage implements OnInit {

  email: any;

  constructor(public route: Router, public authService: AuthenticationService) { }

  ngOnInit() {}

  async resetPassword() {
    this.authService.resetPassword(this.email).then(() => {
      console.log('Reset link sent');
      this.route.navigate(['/home']);
    }).catch((error) => {
      console.log(error);
    });
  }
}
