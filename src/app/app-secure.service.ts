import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { constants } from './helpers/constants';
const jsonDatahttpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic' + btoa(constants.SPRING_SECURITY_USERNAME+':'+constants.SPRING_SECURITY_PASSWORD),
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AppSecureService {


  constructor(private http: HttpClient) {

   }

  getDataSecure(urlPath): Observable<any> {
    return this.http.get(constants.SECURE_API_ENDPOINT).pipe(
      map(this.extractData));
  }


  postJsonDataSecure (data,urlPath): Observable<any>{
    return this.http.post<any>(constants.SECURE_API_ENDPOINT + urlPath, JSON.stringify(data), jsonDatahttpOptions).pipe(
      tap((response) => console.log(response)),
      catchError(this.handleError<any>('postJsonData'))
    );
  }

  updateJsonDataSecure (data, urlPath): Observable<any> {
    return this.http.put(constants.SECURE_API_ENDPOINT + urlPath, JSON.stringify(data), jsonDatahttpOptions).pipe(
      tap((response) => console.log(response)),
      catchError(this.handleError<any>('updateJsonData'))
    );
  }

  deleteDataSecure (urlPath): Observable<any> {
    return this.http.delete<any>(constants.SECURE_API_ENDPOINT + urlPath).pipe(
      tap((response) => console.log(response)),
      catchError(this.handleError<any>('deleteData'))
    );
  }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

}
