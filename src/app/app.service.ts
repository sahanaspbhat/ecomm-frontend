import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { constants } from './helpers/constants';
const jsonDatahttpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa(constants.SPRING_SECURITY_USERNAME+':'+constants.SPRING_SECURITY_PASSWORD),
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private http: HttpClient) {
   }

  getData(urlPath): Observable<any> {
    return this.http.get(constants.API_ENDPOINT + urlPath,jsonDatahttpOptions).pipe(
      map(this.extractData));
  }


  postJsonData (data,urlPath): Observable<any>{
    return this.http.post<any>(constants.API_ENDPOINT + urlPath, JSON.stringify(data), jsonDatahttpOptions).pipe(
      tap((response) => console.log(response))
    );
  }

  updateJsonData (data, urlPath): Observable<any> {
    return this.http.put(constants.API_ENDPOINT + urlPath, JSON.stringify(data), jsonDatahttpOptions).pipe(
      tap((response) => console.log(response)));
  }

  deleteData (urlPath): Observable<any> {
    return this.http.delete<any>(constants.API_ENDPOINT + urlPath,jsonDatahttpOptions).pipe(
      tap((response) => console.log(response))
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

}
