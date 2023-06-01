import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

interface RegisterResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL = 'http://localhost:3000/api/auth/register';

  constructor(private http: HttpClient) {}

  register(formData: any) {
    return this.http.post<RegisterResponse>(this.API_URL, formData).pipe(
      tap(res => {
        sessionStorage.setItem('token', res.token);
      })
    );
  }
}
