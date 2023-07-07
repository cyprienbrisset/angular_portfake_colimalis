import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private laposteurl: string = 'https://api.laposte.fr/suivi/v2'
  private laposteapikey : string = 'wI2dml2oWSk+/0M3KmfQ42nfxXGJ+IcV82r4VYnXXaM/3knkycfd4/RKdWMVy/pB'
  // private ship24api: string = 'apik_hjKkZgvBq6C8MuWDO68vNQqNXNnjQo'
  constructor(private http: HttpClient) { }


  getShippingInfo(idShip: string): Observable<any> {
    const url = `${this.laposteurl}/idships/${idShip}`;
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('X-Okapi-Key', this.laposteapikey);
    return this.http.get(url, { headers });
  }
}
