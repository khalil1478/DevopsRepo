import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Remboursement } from '../model/Remboursement';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {
  url :string  ='http://localhost:8081/'

  nom_docteur =false;
  
  constructor( private http:HttpClient) { }

  public select_remboursement(): Observable<Remboursement[]>
  {
   return this.http.get<Remboursement[]>(this.url+'select_remboursement');

  }

  public detailsRemboursement( id :number)
  {
   return this.http.get<Remboursement>(this.url+'detailsRemboursement/'+id);

  }

  public recherche_bulletin(key :string)
     {
      return this.http.get<Remboursement[]>(this.url+'recherche_bulletin/'+key);

     }

     public deleteRemboursement(id :number)
     {
      return this.http.delete<Remboursement>(this.url+'deleteRemboursement/'+id);

     }
}
