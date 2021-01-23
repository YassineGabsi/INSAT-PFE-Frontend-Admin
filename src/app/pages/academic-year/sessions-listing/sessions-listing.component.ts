import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Session} from '../models/session.model';
import {YearService} from '../services/year.service';

@Component({
  selector: 'app-sessions-listing',
  templateUrl: './sessions-listing.component.html',
  styleUrls: ['./sessions-listing.component.css']
})
export class SessionsListingComponent implements OnInit {

  yearId: string;
  sessionsList: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private yearService: YearService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params: any) => {
        if (params.year) {
          this.yearId = params.year;
          this.getSessions();
        }
      }, (err: any) => {
        console.log(err);
      }
    );

  }

  getSessions(): void {
    this.yearService.getSessions().subscribe(
      (response: any[]) => {
        this.sessionsList = response.filter( (session: Session) => session.year[0] === this.yearId );
      }, (err: any) => {
        console.log(err);
      }
    );
  }

}
