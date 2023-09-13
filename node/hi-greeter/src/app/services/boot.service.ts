import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BootService {
  private _siteMap: BehaviorSubject<any> = new BehaviorSubject([]);
  private baseAPIURL = 'https://hilo.com/0/'

  constructor(private http: HttpClient,) { 
    this.fetchSiteMap();
  }


  private fetchSiteMap() {
    this.http.get(`${this.baseAPIURL}`).subscribe({
      next: obj => {
        if (obj === undefined) {
          this._siteMap.next([]);
        }
        this._siteMap.next(obj);
      }, error: err => {
        this._siteMap.next([{"name": "Failed to load..."}]);
      }
    })
  }

  getSiteMap() {
    return this._siteMap.asObservable();
  }

}
