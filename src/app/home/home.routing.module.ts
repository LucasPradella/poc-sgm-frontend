import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
    { 
        path: '',
        component: HomeComponent,
     //   canActivate: [AuthGuard],
        children: [
            { 
                path: '',
                component: ContentComponent,
            }, 
            { 
                path: 'login',
                component: SignInComponent,
            },            
        ]
    },              
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

