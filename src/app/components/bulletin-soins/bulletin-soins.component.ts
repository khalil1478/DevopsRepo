import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remboursement } from 'src/app/model/Remboursement';
import { BulletinService } from 'src/app/services/bulletin.service';

@Component({
  selector: 'app-bulletin-soins',
  templateUrl: './bulletin-soins.component.html',
  styleUrls: ['./bulletin-soins.component.scss']
})
export class BulletinSoinsComponent implements OnInit {

  constructor(private bulletinService:BulletinService,private router :ActivatedRoute,private route :Router) { }

  id:number;
  list_bulletins:Remboursement[];
  

 
  
  ngOnInit(): void {

    this.select_remboursement();
   
  }

  public select_remboursement()
  {
    this.bulletinService.select_remboursement().subscribe(bulletin => this.list_bulletins=bulletin);
  }

  details_remboursement(id :number)
  {
    this.route.navigate(['details_remboursement',id])
  }



  public recherche_bulletin(key: string): void {
    const results :  Remboursement[] =[];
   
    this.list_bulletins = results;
    if(!key)
    {
      this.select_remboursement();

    }

    else
    {
      this.bulletinService.recherche_bulletin(key).subscribe(remboursement => this.list_bulletins=remboursement);
      
    }
    }



    deleteRemboursement(id :number)
  {
    this.bulletinService.deleteRemboursement(id).subscribe(data => {
      console.log(data);
      this.select_remboursement();
       });
  }
}
