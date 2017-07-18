import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  private requestOptions: RequestOptions;
  private headers: Headers;

  constructor(private http: Http) {

    this.headers = new Headers({
      'Content-Type': 'application/json',
      // 'Authorization': 'Basic Y2E1OmNhcGNv'
    });

    // this.headers.append('X-Next-AuthToken', `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJOZXh0X2JhbmsiLCJ1c2VyRGF0YSI6eyJjdXN0b21lciI6eyJ1bmlxdWVJRCI6MywiY3BmIjoiNTE1MjQ0MjgzMzcifSwiYWNjb3VudHMiOlt7InVuaXF1ZUlEIjozLCJjdXN0b21lcklkIjozLCJhY2NvdW50TnVtYmVyIjo2NjYsImJyYW5jaCI6MTIzfV0sInNlc3Npb25JZCI6IjEiLCJ0aWNrZXQiOiIyIiwiZGV2aWNlSWQiOiJhYnh5emN6ZmciLCJjbGFpbXMiOnsiY3VzdG9tZXIiOnRydWV9fSwianRpIjoiMjE0NDE5MTktNjE4MC00MDIzLTg5NDctYjBhMjNhMmQ3MzZiIn0.lWrQGZNMRgsG_m9suzrRd2xHG9jVZkfZNTXaUC6hdA0`);
    this.requestOptions = new RequestOptions({ headers: this.headers });
  }

  get<T>(url: string, type: { new (): T }): Observable<T> {
    return this.http.get(url, this.requestOptions)
      .catch(this._handleError)
      .map((res: Response) => res.json());
  }

  getWithParams<T>(url: string, params: any): Observable<T> {
    const reqOptions = this.requestOptions;
    reqOptions.params = params;
    return this.http.get(url, reqOptions)
      .catch(this._handleError)
      .map((res: Response) => res.json());
  }

  post<T>(url: string, body: any, type: { new (): T }): Observable<T> {
    return this.http.post(url, body, this.requestOptions)
      .catch(this._handleError)
      .map((res: Response) => res.json());
      
  }

  put<T>(url: string, body: any, type: { new (): T }): Observable<T> {
    return this.http.put(url, body, this.requestOptions)
      .catch(this._handleError)
      .map((res: Response) => res.json());
  }

  delete<T>(url: string, type: { new (): T }, body: any = null): Observable<T> {

    if (body !== null || body !== {}) {
      this.requestOptions.body = body;
    }

    return this.http.delete(url, this.requestOptions)
      .catch(this._handleError)
      // .map((res: Response) => TypedJSON.parse(res.json(), type));
      .map((res: Response) => res.json());
  }

  private _handleError(error: Response) {
    console.log('HTTP SERVICE ERROR... ', error);
    return Observable.throw(error.json() || 'Server Error');
  }
}
