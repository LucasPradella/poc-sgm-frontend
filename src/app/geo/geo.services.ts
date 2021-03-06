import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from './model/info';
import { Metadata } from './model/metadata';


const API = 'http://localhost:8090';

@Injectable({ providedIn: 'root' })
export class GeoService {

    constructor(private http: HttpClient) {}

    findInfo() {
        return this.http
            .get<Info>(API + '/v1/city-data/35028/info');       
    }

    findMetadata() {
        return this.http
            .get<Metadata>(API + '/v1/city-data/35028/metadata');       
    }

}
