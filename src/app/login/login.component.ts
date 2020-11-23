import {Component, Input, OnInit} from '@angular/core';
import { User } from '../model/user.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ThrowStmt } from '@angular/compiler';
import {log} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() user: User = new User();
  invalidLogin = false;
  private loginSuccess: boolean;
  private successMessage: string;

  constructor(private router: Router,
              private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  // Check user for authenticatoin
  // tslint:disable-next-line:typedef
  checkLogin() {
    this.loginservice.authenticate(this.user.name, this.user.password).subscribe((result) => {
      log.console('output' + result);
      // this.invalidLogin = false;
      // this.loginSuccess = true;
      // this.successMessage = 'Login Successful.';
      this.router.navigate(['/viewTables']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
    // this.router.navigate(['/viewTables']);
  }
    // if (this.loginservice.authenticate(this.username, this.password)) {
    //   this.loginservice.getRole(this.username).subscribe((data: User) => {
    //     this.user = data;
    //     this.redirect();
    //   });
    // }
    // else {
    //   console.log('Invalid Login Credentials..');
    //   this.invalidLogin = true;
    // }
  // Redirect based on the user role
  // tslint:disable-next-line:typedef
redirect(){
    if (this.user.role === 'ROLE_USER') {
      sessionStorage.setItem('role', 'user');
      sessionStorage.setItem('userId', String(this.user.id));
      this.invalidLogin = false;
      this.router.navigate(['/userpanel']).then(() => {
        window.location.reload();
      });
    }
    else if (this.user.role === 'ROLE_ADMIN') {
      sessionStorage.setItem('role', 'admin');
      sessionStorage.setItem('userId', String(this.user.id));
      this.invalidLogin = false;
      this.router.navigate(['adminpanel']).then(() => {
        window.location.reload();
      });
    }
  }

  // tslint:disable-next-line:typedef
  signup() {
    this.router.navigate(['signup']);
  }
}
