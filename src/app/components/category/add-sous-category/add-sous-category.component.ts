import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-sous-category',
  templateUrl: './add-sous-category.component.html',
  styleUrls: ['./add-sous-category.component.scss']
})
export class AddSousCategoryComponent implements OnInit {

  id:number;
  constructor(private categoryService:CategoryService,private router :ActivatedRoute,private route :Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
  }

  add_sous_category(categoryForm: NgForm)
  {
    this.categoryService.ajouter_sous_category(this.id,categoryForm.value).subscribe(data => 
      {
        console.log(data);
        categoryForm.reset();
        this.route.navigate(['add_sous_category',this.id])

      }
      );

  }

}
