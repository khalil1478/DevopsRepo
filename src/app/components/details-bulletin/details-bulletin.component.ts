import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remboursement } from 'src/app/model/Remboursement';
import { BulletinService } from 'src/app/services/bulletin.service';

@Component({
  selector: 'app-details-bulletin',
  templateUrl: './details-bulletin.component.html',
  styleUrls: ['./details-bulletin.component.scss']
})
export class DetailsBulletinComponent implements OnInit {

  
  id:number;
  bulletinToDetails : Remboursement;
  constructor( private bulletinService:BulletinService,private router :ActivatedRoute,private route :Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

   console.log(this.id);
   this.bulletinService.detailsRemboursement(this.id).subscribe(
    (response: Remboursement) => {
  
       console.log(response);
       this.bulletinToDetails =  response
  
       
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   );
  }
}
