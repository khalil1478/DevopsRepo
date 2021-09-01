import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { Docteur } from 'src/app/model/Docteur';
import { Remboursement } from 'src/app/model/Remboursement';
import { AdherentService } from 'src/app/services/adherent.service';
import { BulletinService } from 'src/app/services/bulletin.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-ajouter-bulletin',
  templateUrl: './ajouter-bulletin.component.html',
  styleUrls: ['./ajouter-bulletin.component.scss']
})
export class AjouterBulletinComponent implements OnInit {

  createFormGroupe : FormGroup;
  nouveaux_docteur : string;
  id: number;
  idc:number;
  idsous_ca: number;
  idsc :number;
  docteurreq: number;
  iddocteur : number;
  name_docteur : string;
  nom_docteur = false;
  valeur = false;
  CategorieList : Category[];
  docteur_list : Docteur[];
  categorydetails :Category;
  Sous_CategorieList : Category[];
  ville: boolean;
  docteur_select : number;
  docteurfind: Docteur;
 
  constructor( private categoryService:CategoryService, private adherentService:AdherentService, private bulletinService:BulletinService,private router :ActivatedRoute,private route :Router) { }

  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
    this.nom_docteur = false;
    this.valeur = false;
    this.select_category();
    this.select_docteur();
  }

  
  public select_docteur()
  {
    this.categoryService.select_docteur().subscribe(docteur => this.docteur_list=docteur);

    
  }

  public select_category()
  {
    this.categoryService.select_category().subscribe(category => this.CategorieList=category);
  }

  
  public details_category(id :number)
  {
    
    
    this.categoryService.details_category(id).subscribe(category => this.categorydetails=category);

  }
  
  public onChangeCategory(event: any)
  {    console.log("****************************************"+this.idc);

    this.idc = event.target.value;

    this.categoryService.select_sous_category_bycategoryid(this.idc).subscribe(category => this.Sous_CategorieList=category);
   

  }

  public onChangedocteuur(event: any)
  {
    this.docteur_select = event.target.value;

    console.log("      docteur_select              "+this.docteur_select);
    this.categoryService.details_docteur(this.docteur_select).subscribe(
      (response: Docteur) => {
  
        console.log(response);      
        if(response.name ==='AUTRE')
        { 

           this.nom_docteur = true;

        
       }

       else
        this.nom_docteur = false;

       
      }
      );

  }

  public onChangesousCategory(event: any)
  {
    this.idc = event.target.value;

    console.log("id sous category " +this.idc);

    
  this.categoryService.details_category(this.idc).subscribe(
    (response: Category) => {
  
       console.log(response);      
       if(response.type ==='CONSTANT')
       { //this.nom_docteur = true;
        console.log("oui**********************");    
        console.log("nom_docteur**********************"+this.nom_docteur);     
      }

      if(response.type ==='UNITE')
       { // this.nom_docteur = false;
          this.valeur = true;
        
        console.log("oui**********************");    
        console.log("valeur**********************"+this.valeur);     
      }
     }
   );

    


  }

  

  
  
  ajout_bulletin(bulletinForm: NgForm)
  {
    this.idsc = bulletinForm.value['idsc'];
    this.iddocteur = bulletinForm.value['docteur'];
    this.name_docteur = bulletinForm.value['name_docteur'];
    
    
    console.log("id sous category est    ",this.idsc)
    console.log("id docteur   ",this.iddocteur)

    console.log(" name_docteur  ",this.name_docteur)

    console.log("visibilter de docteur "+ this.nom_docteur);

 


    if(this.nom_docteur )
    {
    this.categoryService.ajouterdocteurbycategory(this.idsc, this.name_docteur).subscribe(
      (response: number) => {
    
         console.log(response);
         this.docteurreq =  response;
    
    
    
    
    
    
 
      this.categoryService.ajouterRemboursement(this.id, this.idsc  ,response, bulletinForm.value).subscribe(
        (response: Remboursement) => {
      
           console.log(response);
           console.log(this.id);
           console.log(this.idc);
           console.log(this.iddocteur);
           bulletinForm.reset(); 
         }
       );
        });
      }
      
    
/** */    
else
{




  this.categoryService.ajouterRemboursement(this.id, this.idsc  ,this.iddocteur, bulletinForm.value).subscribe(
    (response: Remboursement) => {
  
       console.log(response);
       console.log(this.id);
       console.log(this.idc);
       console.log(this.iddocteur);
  
       bulletinForm.reset();
       
  
       
     }
   );
    



}
     
   



 








 /*this.categoryService.ajouterRemboursement(this.id, this.idsc  , this.docteurreq, bulletinForm.value).subscribe(
  (response: Remboursement) => {

     console.log(response);
     console.log(this.id);
     console.log(this.idc);
     console.log(this.iddocteur);

     bulletinForm.reset();
     

     
   }
 );
  }
  else{
    this.categoryService.ajouterRemboursement(this.id, this.idsc  , this.iddocteur, bulletinForm.value).subscribe(
      (response: Remboursement) => {
    
         console.log(response);
         console.log(this.id);
         console.log(this.idc);
         console.log(this.iddocteur);
    
         bulletinForm.reset();
         
    
         
       }
     );
  }*/
  
  


}


}
