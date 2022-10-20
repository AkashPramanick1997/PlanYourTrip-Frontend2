import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor( private _http : HttpClient) { }

  public getAllBookings():Observable<any>{
    return this._http.get<any>("http://localhost:8080/bookings");
  }

  public getAllBookingByUserId( id : number):Observable<any>{
    return this._http.get<any>("http://localhost:8080/user-pack?userId="+id);
  }

  public getDetailsByUserPackId(id : any): Observable<any>{
    return this._http.get<any>("http://localhost:8080/booking?id="+id);
  }

  public updateBooking(pack : any , id : any): Observable<any>{
    return this._http.put<any>("http://localhost:8080/updateBooking?id="+id,pack);
  }
}
