import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {Shipment} from './Models/Shipments.Type';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  //http = inject (HttpClient)
  private apiUrl = 'assets/shipmentData.json'; // JSON file

  constructor(private http: HttpClient) {}

  getShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {console.error(error);throw error;})

    );
  }
}
