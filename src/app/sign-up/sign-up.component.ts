import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/user.component';
import {AuthenticationService} from '../services/authentication.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private loginservice: AuthenticationService) { }
  @Input() user: User = new User();
  ngOnInit(): void {
    if (sessionStorage.getItem('role') === 'user' || sessionStorage.getItem('role') === 'admin') {
      this.router.navigate(['noauth']);
    }
    this.user.role = 'user';
    this.user.active = true;
  }
    // Adds a new User
  // tslint:disable-next-line:typedef
    signUp() {
      console.log(this.user);
      this.loginservice.signUp(this.user).subscribe(data => console.log(data), error => console.log(error));
      this.router.navigate(['login']);
    }


}
