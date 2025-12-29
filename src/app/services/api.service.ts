import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // Priority: window.__env (from env.js) > environment.ts
    this.apiUrl = window.__env?.apiUrl || environment.apiUrl;
    
    if (environment.enableDebug) {
      console.log('API Service initialized with URL:', this.apiUrl);
    }
  }

  /**
   * GET request
   */
  get<T>(endpoint: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.append(key, params[key].toString());
        }
      });
    }

    const url = `${this.apiUrl}${endpoint}`;
    
    if (environment.enableDebug) {
      console.log('GET Request:', url, params);
    }

    return this.http.get<T>(url, {
      params: httpParams,
      headers: this.getHeaders()
    });
  }

  /**
   * POST request
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}${endpoint}`;
    
    if (environment.enableDebug) {
      console.log('POST Request:', url, body);
    }

    return this.http.post<T>(url, body, {
      headers: this.getHeaders()
    });
  }

  /**
   * PUT request
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}${endpoint}`;
    
    if (environment.enableDebug) {
      console.log('PUT Request:', url, body);
    }

    return this.http.put<T>(url, body, {
      headers: this.getHeaders()
    });
  }

  /**
   * DELETE request
   */
  delete<T>(endpoint: string): Observable<T> {
    const url = `${this.apiUrl}${endpoint}`;
    
    if (environment.enableDebug) {
      console.log('DELETE Request:', url);
    }

    return this.http.delete<T>(url, {
      headers: this.getHeaders()
    });
  }

  /**
   * PATCH request
   */
  patch<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}${endpoint}`;
    
    if (environment.enableDebug) {
      console.log('PATCH Request:', url, body);
    }

    return this.http.patch<T>(url, body, {
      headers: this.getHeaders()
    });
  }

  /**
   * Get common headers
   */
  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return headers;
  }

  /**
   * Get API URL
   */
  getApiUrl(): string {
    return this.apiUrl;
  }
}