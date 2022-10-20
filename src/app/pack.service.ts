import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  constructor( private _http : HttpClient) { }

  public getAllPackByHotelId( id : any):Observable<any>{
    return this._http.get<any>("http://localhost:8080/hotels/packs?id="+id , id);
  }

  public packDetailsById(id : any): Observable<any>{
    return this._http.get<any>("http://localhost:8080/packbyid?id="+id);
  }

  public getAllPack():Observable<any>{
    return this._http.get<any>("http://localhost:8080/packs");
  }

  public addNewPack(pack : any , id : any ): Observable<any>{
    return this._http.post<any>("http://localhost:8080/addpack?id="+id,pack);
  }

  public deletePackById(id : any) : Observable<any>{
    return this._http.delete<any>("http://localhost:8080/deletePack?id="+id);
  }
}
