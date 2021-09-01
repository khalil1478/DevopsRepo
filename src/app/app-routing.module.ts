import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectAdherentComponent } from './components/select-adherent/select-adherent.component';
import { IndexComponent } from './components/index/index.component';
import { AjouterAdherentComponent } from './components/ajouter-adherent/ajouter-adherent.component';
import { AjouterSousAdherentComponent } from './components/sous_adherent/ajouter-sous-adherent/ajouter-sous-adherent.component';
import { ListSousAdherentComponent } from './components/sous_adherent/list-sous-adherent/list-sous-adherent.component';
import { ModifierAdherentComponent } from './components/modifier-adherent/modifier-adherent.component';
import { BulletinSoinsComponent } from './components/bulletin-soins/bulletin-soins.component';
import { AjouterBulletinComponent } from './components/ajouter-bulletin/ajouter-bulletin.component';
import { DetailsBulletinComponent } from './components/details-bulletin/details-bulletin.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { AddSousCategoryComponent } from './components/category/add-sous-category/add-sous-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { DetailsCategoryComponent } from './components/category/details-category/details-category.component';
import { ModifierCategoryComponent } from './components/category/modifier-category/modifier-category.component';
import { DetailsAdherentComponent } from './components/details-adherent/details-adherent.component';

const routes: Routes = [
{path:'' ,component:IndexComponent,children : [
  {path:'listadherents' ,component:SelectAdherentComponent},
  {path:'ajout_adherent' ,component:AjouterAdherentComponent},
 {path:'modifier_adherent/:id' ,component:ModifierAdherentComponent},
  {path:'listsous_adherents' ,component:ListSousAdherentComponent},
  {path:'ajout_sous_adherent' ,component:AjouterSousAdherentComponent},
  {path:'bulletin-soins' ,component:BulletinSoinsComponent},
  {path:'details_remboursement/:id' ,component:DetailsBulletinComponent},
  {path:'ajout_bulletin/:id' ,component:AjouterBulletinComponent},
  {path:'add_sous_adherent/:id' ,component:AjouterSousAdherentComponent},
  {path:'list_category' ,component:ListCategoryComponent},
  {path:'add_sous_category/:id' ,component:AddSousCategoryComponent},
  {path:'add_category' ,component:AddCategoryComponent},
  {path:'details_category/:id' ,component:DetailsCategoryComponent},
  {path:'modifier_category/:id' ,component:ModifierCategoryComponent},
  {path:'details_adherent/:id' ,component:DetailsAdherentComponent}
]},


];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
