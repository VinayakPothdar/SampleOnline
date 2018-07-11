import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()

export class ApiService {

  public IsLoginSucess: boolean = true;
  public cityList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  public SetCityList() {

    let citys = [
      {
        CityId: "1", CityName: "Hyderbad"
      },
      {
        CityId: "2", CityName: "Bangalore"
      }
    ];
    this.cityList.next(citys);

  }

  public GetCities(): Observable<any> {
    return this.cityList.asObservable();
  }

  public BaseWebApiURL: string = "http://localhost:55889/";
  constructor(private http: HttpClient) { }

  public get(featureurl: string): Observable<any> {
    return this.http.get<any>(this.BaseWebApiURL + featureurl);

  }

  public PostUploadFiles(url: string, files: any, params: any): Observable<any> {
    return this.http.post(this.BaseWebApiURL + url, files, { params: params })

  }

  public Post(featureUrl: any, formData: any): Observable<any> {
    return this.http.post(this.BaseWebApiURL + featureUrl, formData);
  }


  public PostWithURLSerachParams(url: string, body: string): Observable<any> {
    let headers = new HttpHeaders();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<any>(this.BaseWebApiURL + url, body, { headers: headers });

  }
}