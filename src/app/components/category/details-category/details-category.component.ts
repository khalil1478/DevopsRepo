import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.scss']
})
export class DetailsCategoryComponent implements OnInit {

  id :number;
  constructor(private categoryService:CategoryService,private router :ActivatedRoute,private route :Router) { }
  list_sous_category : Category[];
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.categoryService.select_sous_category_bycategoryid(this.id).subscribe(category => this.list_sous_category=category);

  }


  
  delete_category(id :number)
  {
    this.categoryService.delete_category(id).subscribe(data => {
      console.log(data);
      this.route.navigate(['list_category'])
       });
  }

  modifier_category(id :number)
  {
    this.route.navigate(['modifier_category',id])
  }


}
