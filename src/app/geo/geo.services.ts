import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Info } from './model/info';
import { Metadata } from './model/metadata';


let API_GEO = '';

@Injectable({ providedIn: 'root' })
export class GeoService {

    constructor(private http: HttpClient) {
        API_GEO = environment.uriGeo;
    }

    findInfo() {
        return this.http
            .get<Info>(API_GEO + '/city-data/35028/info');       
    }

    findMetadata() {
        return this.http
            .get<Metadata>(API_GEO + '/city-data/35028/metadata');       
    }

}
