import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  list_category:Category[];
  constructor( private categoryService:CategoryService ,private router :Router,private route :ActivatedRoute) { }

  ngOnInit(): void {

    this.select_list_category();
  }

  public select_list_category()
  {
    this.categoryService.select_list_category().subscribe(category => this.list_category=category);
  }

  delete_category(id :number)
  {
    this.categoryService.delete_category(id).subscribe(data => {
      console.log(data);
      this.select_list_category();
       });
  }

  add_sous_category(id :number)
  {
    this.router.navigate(['add_sous_category',id])
  }

  details_category(id :number)
  {
    this.router.navigate(['details_category',id])
  }

  modifier_category(id :number)
  {
    this.router.navigate(['modifier_category',id])
  }

}
