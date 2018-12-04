import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { constants } from './helpers/constants';
const jsonDatahttpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AppInsecureService {


  constructor(private http: HttpClient) {

   }

  getDataNormal(urlPath): Observable<any> {
    return this.http.get(constants.NORMAL_API_ENDPOINT).pipe(
      map(this.extractData));
  }


  postJsonDataNormal (data,urlPath): Observable<any>{
    return this.http.post<any>(constants.NORMAL_API_ENDPOINT + urlPath, JSON.stringify(data), jsonDatahttpOptions).pipe(
      tap((response) => console.log(response)),
      catchError(this.handleError<any>('postJsonData'))
    );
  }

  updateJsonDataNormal (data, urlPath): Observable<any> {
    return this.http.put(constants.NORMAL_API_ENDPOINT + urlPath, JSON.stringify(data), jsonDatahttpOptions).pipe(
      tap((response) => console.log(response)),
      catchError(this.handleError<any>('updateJsonData'))
    );
  }

  deleteDataNormal (urlPath): Observable<any> {
    return this.http.delete<any>(constants.NORMAL_API_ENDPOINT + urlPath).pipe(
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
