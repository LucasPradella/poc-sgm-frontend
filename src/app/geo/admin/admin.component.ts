import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GeoService } from '../geo.services';

import { Metadata } from '../model/metadata';

@Component({
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

    metadata: Metadata;

    constructor(private geoService: GeoService) {     }
   
   
    ngOnInit(): void {

        this.geoService
            .findMetadata()
            .subscribe(m => this.metadata = m);

          
   
    }

    
   
}