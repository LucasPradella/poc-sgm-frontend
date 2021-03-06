import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { GeoComponent } from './geo.component';
import { OpenComponent } from './open/open.component';

const routes: Routes = [
    { 
        path: '',
        component: GeoComponent,
//        canActivate: [AuthGuard],
        children: [
            { 
                path: 'admin',
                component: AdminComponent,
            }, 
            { 
                path: 'cidadao',
                component: OpenComponent,
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
export class GeoRoutingModule { }

