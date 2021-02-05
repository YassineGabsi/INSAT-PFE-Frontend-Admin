import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from 'src/app/services/professors.service';

@Component({
  selector: 'app-professors-listing',
  templateUrl: './professors-listing.component.html',
  styleUrls: ['./professors-listing.component.css']
})
export class ProfessorsListingComponent implements OnInit {
  professors = [];
  p: number = 1;
  loading = false;

  constructor(private professorsService: ProfessorsService) { }

  ngOnInit(): void {
    this.getProfessors();
  }

  getProfessors(): void {
    this.loading = true;
    this.professorsService.get().subscribe(
      result => {
        this.professors = result;
        this.loading = false;
      }
    );
  }

}
