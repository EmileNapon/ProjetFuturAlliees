
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class DomaineServiceCours {

constructor( private http: HttpClient ) { }

  apiUrl='http://localhost:9999/matieres'

getDataDomaine(domaineId:string): Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}?domaineId=${domaineId}`)
}

  }