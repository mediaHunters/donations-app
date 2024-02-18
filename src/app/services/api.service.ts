import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  APIURL: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  register(body: any) {
    return this.http.post(this.APIURL + 'register', body);
  }

  login(body: any) {
    return this.http.post(this.APIURL + 'login', body)
  }

  refreshToken() {
    let body = {
      
    }
    return this.http.post(this.APIURL + 'refresh-token', body)
  }
}
