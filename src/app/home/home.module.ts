import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
    declarations: [ 
        SignInComponent,
        HomeComponent,
        ContentComponent
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule,
    ],
    providers: [
        
    ]
})
export class HomeModule { }