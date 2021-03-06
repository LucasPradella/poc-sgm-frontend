import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { GeoRoutingModule } from './geo.routing.module';
import { GeoComponent } from './geo.component';
import { AdminComponent } from './admin/admin.component';
import { OpenComponent } from './open/open.component';

@NgModule({
    declarations: [ 
        GeoComponent,
        AdminComponent,
        OpenComponent
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        GeoRoutingModule
    ],
    providers: [
    ]
})
export class GeoModule { }