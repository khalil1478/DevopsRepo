import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adherent } from 'src/app/model/adherent';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-modifier-adherent',
  templateUrl: './modifier-adherent.component.html',
  styleUrls: ['./modifier-adherent.component.scss']
})
export class ModifierAdherentComponent implements OnInit {

  id:number;
  adherentToUpdate : Adherent;
  constructor( private adherentService:AdherentService,private router :ActivatedRoute,private route :Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.adherentService.details_adherent(this.id).subscribe(data =>
      {
         this.adherentToUpdate = data;
        },error => console.log(error));
  }


  modifier_adherent()
  {
   // this.adherentToUpdate = adherentForm.value;
  this.adherentService.modifier_adherent(this.id,this.adherentToUpdate).subscribe(
  (response: Adherent) => {
    this.route.navigate(['listadherents'])
     console.log(response);
     
   },
   (error: HttpErrorResponse) => {
     alert(error.message);
   }
 );
  }

}
