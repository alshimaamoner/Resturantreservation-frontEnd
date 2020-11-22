import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  constructor(private router: Router,
              private loginservice: AuthenticationService) { }

  ngOnInit(): void {
    this.loginservice.logOut();
    this.router.navigate(['login']);
  }

}
