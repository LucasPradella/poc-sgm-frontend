import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { Info } from '../model/info';
import { GeoService } from '../geo.services';

@Component({
    templateUrl: './open.component.html'
})
export class OpenComponent implements OnInit {
    
    info: Info;

    constructor(private geoService: GeoService) {     }
   
   
    ngOnInit(): void {

        this.geoService
            .findInfo()
            .subscribe(info => this.info = info);

          
   
    }


  
}