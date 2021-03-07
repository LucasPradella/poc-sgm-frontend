import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAccessComponent } from './not-access/not-access.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent, NotAccessComponent]
})
export class ErrorsModule { }
