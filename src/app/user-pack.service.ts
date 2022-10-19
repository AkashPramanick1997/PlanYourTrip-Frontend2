import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPack } from './user-pack';

@Injectable({
  providedIn: 'root'
})
export class UserPackService {
  constructor( private _http : HttpClient) { }

  public addPackageWithUserId(userPack : UserPack , userId : number , packId : number | any): Observable<any>{
    return this._http.post<any>("http://localhost:8080/user-pack?userId="+userId +"&packId="+packId, userPack);
  }

  public getallBookings(): Observable<any>{
    return this._http.get<any>("http://localhost:8080/bookings");
  }

  public deleteBooking(num : number) : Observable<any>
  {
    return this._http.delete<any>("http://localhost:8080/bookings?num="+num);
  }

  public getDetailsById(id : any ):Observable<any>{
    return this._http.get<any>("http://localhost:8080/booking?id="+id);
  }
}
