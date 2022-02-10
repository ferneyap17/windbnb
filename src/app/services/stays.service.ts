import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Stay } from './interfaces/cities.interface';

@Injectable({
  providedIn: 'root'
})
export class StaysService {
  stays: any;
  counter: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) { }

  public getStays(): Observable<Stay[]> {
    return this.http.get<Stay[]>('./assets/json/stays.json');
  }
}
