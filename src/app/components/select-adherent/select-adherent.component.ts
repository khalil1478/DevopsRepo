import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adherent } from 'src/app/model/adherent';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-select-adherent',
  templateUrl: './select-adherent.component.html',
  styleUrls: ['./select-adherent.component.scss']
})
export class SelectAdherentComponent implements OnInit {

  constructor( private adherentService:AdherentService ,private router :Router,private route :ActivatedRoute) { }
  adherentToUpdate : Adherent;

  id:number;
  list_adherent:Adherent[];
 
  
  ngOnInit(): void {

    this.select_adherent();
   
  }

  public select_adherent()
  {
    this.adherentService.select_adherent().subscribe(adherent => this.list_adherent=adherent);
  }

  modifier_adherent(id :number)
  {
    this.router.navigate(['modifier_adherent',id])
  }

  
  delete_adherent(id :number)
  {
    this.adherentService.delete_adherent(id).subscribe(data => {
      console.log(data);
      this.select_adherent();
       });
  }

  public recherche_adherent(key: string): void {
    const results :  Adherent[] =[];
   
    this.list_adherent = results;
    if(!key)
    {
      this.select_adherent();

    }

    else
    {
      this.adherentService.recherche_adherent(key).subscribe(adherent => this.list_adherent=adherent);
      
    }
    }


    add_bulletin_soins(id :number)
    {
      this.router.navigate(['ajout_bulletin',id])
    }

    add_sous_adherent1(id :number,adherentForm: NgForm)
    {
      this.adherentService.ajouter_sous_adherent(id,adherentForm.value).subscribe(data => 
        {
          console.log(data);
        }
        );

    }

    add_sous_adherent(id :number)
    {
      this.router.navigate(['add_sous_adherent',id])
    }

    details_adherent(id :number)
    {
      this.router.navigate(['details_adherent',id])
    }


  



}
