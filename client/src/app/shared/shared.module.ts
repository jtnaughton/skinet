import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { PagerComponent } from './pager/pager.component';



@NgModule({
  declarations: [
    PaginationHeaderComponent,
    PagerComponent,
  ],
  imports: [
    PaginationModule.forRoot(),
    CommonModule
  ],
  exports: [
    PaginationModule,
    PaginationHeaderComponent,
    PagerComponent
  ]
})
export class SharedModule { }
