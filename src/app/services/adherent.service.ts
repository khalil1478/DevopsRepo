import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adherent } from '../model/adherent';
import { Docteur } from '../model/Docteur';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {
 

  url :string  ='http://localhost:8081/'

  
  constructor( private http:HttpClient) { }


     public select_adherent(): Observable<Adherent[]>
     {
      return this.http.get<Adherent[]>(this.url+'select_adherent');

     }

     public ajout_adherent(adherent :Adherent)
     {
      return this.http.post<Adherent>(this.url+'ajout_adherent',adherent);

     }
     public modifier_adherent( id :number,adherent :Adherent)
     {
      return this.http.put<Adherent>(this.url+'modifier_adherent/'+id,adherent);

     }
     
     public details_adherent( id :number)
     {
      return this.http.get<Adherent>(this.url+'details_adherent/'+id);

     }

     public delete_adherent(id :number)
     {
      return this.http.delete<Adherent>(this.url+'delete_adherent/'+id);

     }

     public recherche_adherent(key :string)
     {
      return this.http.get<Adherent[]>(this.url+'recherche_adherent/'+key);

     }

     ajouter_sous_adherent(id: number,adherent :Adherent) {
      return this.http.post<Adherent>(this.url+'ajouter_sous_adherent/'+id,adherent);
    }

    
    detailsAdherent(id: number) {
      return this.http.get<Adherent>(this.url+'details_adherent/'+id);
    }

      // define function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.url}/file/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

   // define function to download files
   download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.url}/file/download/${filename}/`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  } 
   
  

     
    








  
}
