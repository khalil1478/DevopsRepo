import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
list_category : Category[];
  constructor(private categoryService:CategoryService,private router :ActivatedRoute,private route :Router) { }

  ngOnInit(): void {
   
  }

  add_category(categoryForm: NgForm)
    {
      this.categoryService.ajoutercategory(categoryForm.value).subscribe(data => 
        {
          console.log(data);
          categoryForm.reset();
          this.route.navigate(['list_category'])

        }
        );

    }

    

}
