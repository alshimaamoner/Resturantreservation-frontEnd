import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from 'rxjs';
import {Reservation} from '../model/reservation.component';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent implements OnInit {
  constructor(private router: Router, private loginservice: AuthenticationService) { }

  public confirmClicked = false;
  public cancelClicked = false;

  table: Observable<Reservation[]>;
// tslint:disable-next-line:typedef
  ngOnInit() {
    this.loginservice.showReservation().subscribe(
      (data: Observable<Reservation[]>) => this.table = data
    );
  }


  // tslint:disable-next-line:typedef
  logOut() {
    this.router.navigate(['/logout']);
  }

}
