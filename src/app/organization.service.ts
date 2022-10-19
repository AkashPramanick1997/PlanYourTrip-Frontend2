import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor( private http : HttpClient) { }

  public addOrganization(org : any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/addOrganization",org);
  }
}
