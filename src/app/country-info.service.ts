import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { response } from 'express';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CountryInfoService {

  private baseUrl:string = 'https://api.worldbank.org/V2/country/';

  constructor(private http: HttpClient) {}

  getDataById(id:string): Observable<any>{
    // const params = new HttpParams().set('format', 'json').set('id', id)
    // return this.http.get<any>(this.baseUrl,{params})

    const url = `${this.baseUrl}/${id}?format=json`
    return this.http.get<any>(url).pipe(map(response=> response[1][0]))

  }
}
