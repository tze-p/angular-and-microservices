import { Component } from '@angular/core';
import { AuthService } from '../services/common/authenticator.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // getting information from the DB
  loggedOut: boolean = true;

  constructor(private authService: AuthService, 
              private router: Router){

  }

  ngOnInit(){
    if (this.authService.isLoggedIn()) {
      this.loggedOut = false;
    }else{
      this.loggedOut = true;
    }
  }

  onLogout(){
    this.authService.logout();
    this.loggedOut = true;
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
