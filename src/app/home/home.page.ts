import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any
  constructor(public route: Router, public authService:AuthenticationService) {
    this.user = authService.getProfile()
  }


  async logout(){
    this.authService.signOut().then(() => {
      this.route.navigate(['/landing'])
    })
  } 
}
