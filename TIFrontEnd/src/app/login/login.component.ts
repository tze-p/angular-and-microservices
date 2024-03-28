import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/common/authenticator.service'
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
    loginForm!:FormGroup;
    error = '';
    unauthenticated=false;

    @Output() stateChanged = new EventEmitter();

    constructor(private fb:FormBuilder, 
                 private authService: AuthService, 
                 private route: ActivatedRoute,
                 private router: Router) {
        
        if (this.authService.isLoggedIn()){
            this.router.navigate(['/']);
        }

        this.loginForm = this.fb.group({
            username: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    logginIn=false;

    ngOnInit(){
        this.logginIn=false;
        this.error = "";
        this.unauthenticated=false;
      }
    

    login() {
        const val = this.loginForm.value;
        this.logginIn=true;
        this.unauthenticated=false;

        if (val.username && val.password) {
            this.authService.login(val.username, val.password)
            .pipe(first())
            .subscribe({
                next: data => {
                    // get return url from route parameters or default to '/'
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigate([returnUrl]).then(() => {
                        window.location.reload();
                      });

                    // get the value here:
                    // console.log(data);
                    this.authService.setSession(data);
                },
                error: error => {
                    this.error = error;
                    // console.log("Login return error: " + error);
                    this.unauthenticated=true;
                    this.logginIn = false;
                }
            });        
        }
    }
}