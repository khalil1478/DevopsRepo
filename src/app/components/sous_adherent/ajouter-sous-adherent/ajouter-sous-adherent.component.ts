import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-ajouter-sous-adherent',
  templateUrl: './ajouter-sous-adherent.component.html',
  styleUrls: ['./ajouter-sous-adherent.component.scss']
})
export class AjouterSousAdherentComponent implements OnInit {

  constructor( private adherentService:AdherentService,private router :ActivatedRoute,private route :Router) { }

  id: number;
  ngOnInit(): void {

    this.id = this.router.snapshot.params['id'];
  }
  add_sous_adherent(adherentForm: NgForm)
    {
      this.adherentService.ajouter_sous_adherent(this.id,adherentForm.value).subscribe(data => 
        {
          console.log(data);
          adherentForm.reset();

        }
        );

    }

}
