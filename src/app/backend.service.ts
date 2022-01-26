import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Birds{
  ID: number,
  Name: string,
  Type: string,
  ScientificName: string
}

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private http: HttpClient) { }
  birds = 'assets/birds.json';

  getBirds() {
    return this.http.get<Birds>
    (this.birds);
  }
}
