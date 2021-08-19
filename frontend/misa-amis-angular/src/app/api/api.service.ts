import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
  
export class ApiService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  /**
   * Function get data
   * @param url url
   * @param data data
   * CreatedBy: PQ Huy(18.08.2021)
   */
  get(url: string, data: any) {
    return this.http.get(`${this.baseUrl + url}`, {params: data}) as Observable<any>;
  }

  /**
   * Function post data
   * @param url url
   * @param data data
   * @returns result
   * CreatedBy: PQ Huy(18.08.2021)
   */
  post(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data);
  }

  /**
   * Function put data
   * @param url url
   * @param data data
   * @returns reuslt
   * CreatedBy: PQ Huy(18.08.2021)
   */
  put(url: string, id:any, data: any): Observable<boolean> {
    return this.http
      .put(this.baseUrl + url + id, data)
      .pipe(map((res) => res as boolean));
  }

  /**
   * Function delete data
   * @param url url
   * @returns result
   * CreatedBy: PQ Huy(18.08.2021)
   */
  delete(url: string): Observable<boolean> {
    return this.http
      .delete(this.baseUrl + url)
      .pipe(map((res) => res as boolean));
  }

}
