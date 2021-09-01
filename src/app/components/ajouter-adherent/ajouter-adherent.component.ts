import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Adherent } from 'src/app/model/adherent';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-ajouter-adherent',
  templateUrl: './ajouter-adherent.component.html',
  styleUrls: ['./ajouter-adherent.component.scss']
})
export class AjouterAdherentComponent implements OnInit {



  constructor( private adherentService:AdherentService/*,private fb : FormBuilder*/) { }

  ngOnInit(): void {
  }
  
  

  
  ajout_adherent(adherentForm: NgForm)
  {
  
  this.adherentService.ajout_adherent(adherentForm.value).subscribe(
  (response: Adherent) => {

     console.log(response);
    adherentForm.reset();

     
   },
   (error: HttpErrorResponse) => {
     alert(error.message);
     adherentForm.reset();
   }
 );
  }


}
