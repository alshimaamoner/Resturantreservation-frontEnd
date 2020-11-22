import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Reservation} from '../model/reservation.component';
import {Table} from '../model/table.componet';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {


  constructor(private router: Router,
              private loginservice: AuthenticationService) { }
  table: Table = new Table();
  noOfPerson: bigint;
// tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  add(table, noOfPerson){
    this.noOfPerson = noOfPerson;
    this.loginservice.addReservation(table, noOfPerson).subscribe();
    alert('added');
  }

}
