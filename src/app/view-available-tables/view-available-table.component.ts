import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from 'rxjs';
import Table = WebAssembly.Table;


@Component({
  selector: 'app-show-scheduled-flights',
  templateUrl: './view-available-table.component.html',
  styleUrls: ['./view-available-table.component.css']
})
export class ShowAvailableTableComponent implements OnInit {
  public confirmClicked = false;
  public cancelClicked = false;
  constructor(private router: Router,
              private loginservice: AuthenticationService) { }
  table: Observable<Table[]>;
// tslint:disable-next-line:typedef
ngOnInit() {
  this.loginservice.showAvailableTable().subscribe(
    (data: Observable<Table[]>) => this.table = data
  );
}


  // tslint:disable-next-line:typedef
  logOut() {
    this.router.navigate(['/logout']);
  }
}
