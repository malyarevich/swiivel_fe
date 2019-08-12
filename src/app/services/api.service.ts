import { Injectable } from '@angular/core';
import { HttpService } from '@services/http.service';
import { HttpParams } from '@angular/common/http';
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpService) { }
}
