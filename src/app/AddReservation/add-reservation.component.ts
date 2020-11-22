import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Reservation} from '../model/reservation.component';


@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./Add-reservation.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class AddReservation implements OnInit {
// tslint:disable-next-line:typedef
  constructor(private router: Router,
              private loginservice: AuthenticationService) { }
  reservation: Reservation = new Reservation();
  noOfPerson: bigint;
// tslint:disable-next-line:typedef
ngOnInit() {
}
  // tslint:disable-next-line:typedef
  addReservation(reservation, noOfPerson){
  this.noOfPerson = noOfPerson;
  this.loginservice.addReservation(reservation).subscribe();
  alert('added');
  }
}
