import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
 
 

export class DomaineService {

  private domainesUrl = 'http://localhost:9999/Domaines';
  private matieresUrl = 'http://localhost:9999/matieres';
  
constructor( private http: HttpClient ) { }
getDomaines(): Observable<any[]> {
  return this.http.get<any[]>(this.domainesUrl);
}

getMatieres(): Observable<any[]> {
  return this.http.get<any[]>(this.matieresUrl);
}
}