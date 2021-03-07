import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NotAccessComponent } from './errors/not-access/not-access.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    
    {
        path: 'geo',
        pathMatch: 'full',
        redirectTo: 'geo'
    },
    { 
        path: 'geo',
        loadChildren: './geo/geo.module#GeoModule'
    },      
    { 
        path: '403', 
        component: NotAccessComponent 
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
      
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

