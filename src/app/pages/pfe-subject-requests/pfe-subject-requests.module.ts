import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PfeSubjectRequestsRoutingModule } from './pfe-subject-requests-routing.module';
import { FormsModule } from '@angular/forms';
import { SubjectRequestCardComponent } from './subject-request-card/subject-request-card.component';
import { RequestsListingComponent } from './requests-listing/requests-listing.component';
import {PfeSubjectRequestsComponent} from './pfe-subject-requests.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {SpinnerModule} from '../../components/spinner/spinner.module';

@NgModule({
  declarations: [SubjectRequestCardComponent,
    RequestsListingComponent,
    PfeSubjectRequestsComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    PfeSubjectRequestsRoutingModule,
    NgxPaginationModule,
    SpinnerModule,
  ]
})
export class PfeSubjectRequestsModule { }
