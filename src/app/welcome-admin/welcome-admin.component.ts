import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addTable(): void{
    this.router.navigate(['table/add']);
  }

  viewReservation(): void{
    this.router.navigate(['viewReservation/show']);
  }


  // tslint:disable-next-line:typedef
  logout() {
    this.router.navigate(['/logout']);
  }
}
