import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-modifier-category',
  templateUrl: './modifier-category.component.html',
  styleUrls: ['./modifier-category.component.scss']
})
export class ModifierCategoryComponent implements OnInit {
id:number;
categoryToUpdate :Category;
  constructor(private categoryService:CategoryService,private router :ActivatedRoute,private route :Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.categoryService.details_category(this.id).subscribe(data =>
      {
         this.categoryToUpdate = data;
        });
  }


  modifier_category()
  {
   // this.categoryToUpdate = categoryForm.value;
  this.categoryService.modifier_category(this.id,this.categoryToUpdate).subscribe(
  (response: Category) => {
    this.route.navigate(['list_category'])
     console.log(response);
     
   },
   (error: HttpErrorResponse) => {
     alert(error.message);
   }
 );
  }

}
