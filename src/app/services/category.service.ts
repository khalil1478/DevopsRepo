import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adherent } from '../model/adherent';
import { Category } from '../model/Category';
import { Docteur } from '../model/Docteur';
import { Enregistrement } from '../model/Enregistrement';
import { Remboursement } from '../model/Remboursement';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  
 

 
 
  url :string  ='http://localhost:8081/'

  
  constructor( private http:HttpClient) { }

  public select_category(): Observable<Category[]>
  {
   return this.http.get<Category[]>(this.url+'select_category');

  }

  public select_sous_category_bycategoryid( id :number)
  {
   return this.http.get<Category[]>(this.url+'select_sous_category_bycategoryid/'+id);

  }

  public ajouterRemboursement( idad :number,idc :number, iddoc :number, remboursement :Remboursement)
  {
   return this.http.post<Remboursement>(this.url+'ajouterRemboursement/'+idad+"/"+idc+"/"+iddoc,remboursement);

  }
  public details_category( id :number)
  {
   return this.http.get<Category>(this.url+'details_category/'+id);

  }

  public select_docteur()
  {
   return this.http.get<Docteur[]>(this.url+'select_docteur');

  }

  public details_docteur( id :number)
  {
    
   return this.http.get<Docteur>(this.url+'details_docteur/'+id);

  }
  public ajouterdocteurbycategory( idcat : number, key :string)
  {
   return this.http.post<number>(this.url+'ajouterdocteurbycategory/'+idcat+"/"+key,null);

 //  return this.http.get<Docteur>(this.url+'ajouterdocteurbycategory/'+idcat+"/"+key);

  }
  public finddocteurbyname( key: string) {
    return this.http.get<Docteur>(this.url+'finddocteurbyname/'+key);
  }


  select_list_category() {
    return this.http.get<Category[]>(this.url+'select_category');
  }


  delete_category(id: number) {
    return this.http.delete<Category>(this.url+'delete_category/'+id);
  }

  ajouter_sous_category(id: number, adherent: Adherent) {
    return this.http.post<Category>(this.url+'ajouter_sous_category/'+id,adherent);
  }
  
  ajoutercategory(adherent: Adherent) {
    return this.http.post<Category>(this.url+'ajoutercategory/',adherent);
  }

  modifier_category(id: number,category: Category) {
    return this.http.put<Category>(this.url+'modifier_category/'+id,category);
  }

  select_enfants_byid(id: number) {
    return this.http.get<Enregistrement[]>(this.url+'select_enfants_byid/'+id);
  }
 
}
