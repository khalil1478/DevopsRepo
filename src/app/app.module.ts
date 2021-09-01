import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectAdherentComponent } from './components/select-adherent/select-adherent.component';
import { IndexComponent } from './components/index/index.component';
import { AjouterAdherentComponent } from './components/ajouter-adherent/ajouter-adherent.component';
import { AjouterSousAdherentComponent } from './components/sous_adherent/ajouter-sous-adherent/ajouter-sous-adherent.component';
import { ListSousAdherentComponent } from './components/sous_adherent/list-sous-adherent/list-sous-adherent.component';
import { FormsModule } from '@angular/forms';
import { ModifierAdherentComponent } from './components/modifier-adherent/modifier-adherent.component';
import { ToastrModule } from 'ngx-toastr';
import { BulletinSoinsComponent } from './components/bulletin-soins/bulletin-soins.component';
import { AjouterBulletinComponent } from './components/ajouter-bulletin/ajouter-bulletin.component';
import { DetailsBulletinComponent } from './components/details-bulletin/details-bulletin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ModifierCategoryComponent } from './components/category/modifier-category/modifier-category.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { AddSousCategoryComponent } from './components/category/add-sous-category/add-sous-category.component';
import { DetailsCategoryComponent } from './components/category/details-category/details-category.component';
import { AjouterBordereauComponent } from './components/bordereau/ajouter-bordereau/ajouter-bordereau.component';
import { ListBordereauComponent } from './components/bordereau/list-bordereau/list-bordereau.component';
import { DetailsAdherentComponent } from './components/details-adherent/details-adherent.component';

ToastrModule
FormsModule
@NgModule({
  declarations: [
    AppComponent,
    SelectAdherentComponent,
    IndexComponent,
    AjouterAdherentComponent,
    AjouterSousAdherentComponent,
    ListSousAdherentComponent,
    ModifierAdherentComponent,
    BulletinSoinsComponent,
    AjouterBulletinComponent,
    DetailsBulletinComponent,
    AddCategoryComponent,
    ModifierCategoryComponent,
    ListCategoryComponent,
    AddSousCategoryComponent,
    DetailsCategoryComponent,
    AjouterBordereauComponent,
    ListBordereauComponent,
    DetailsAdherentComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
