import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminOrganizationService {

  constructor( private http : HttpClient) { 
    }

    public getAllOrganization():Observable<any>{
      return this.http.get<any>("http://localhost:8080/organization");
    }

    public deleteOrganization(id : any):Observable<any>{
      return this.http.delete<any>("http://localhost:8080/deleteOrganization?id="+id);
    }

    public getOrganizationById(id : any) : Observable<any>{
      return this.http.get<any>("http://localhost:8080/organizationById?id="+id);
    }
  }
