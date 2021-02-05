import { Component, OnInit } from '@angular/core';
import {YearService} from '../services/year.service';
import {Year} from '../models/year.model';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  yearsList;
  p: number = 1;
  loading = false;

  constructor(private yearService: YearService) { }

  ngOnInit(): void {
    this.loading = true;
    this.yearService.getYears().subscribe(
      (response: Year) => {
        this.yearsList = response;
        this.loading = false;
      }, (error: any) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
