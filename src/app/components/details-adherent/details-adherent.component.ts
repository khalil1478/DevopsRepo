import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Adherent } from 'src/app/model/adherent';
import { Enregistrement } from 'src/app/model/Enregistrement';
import { AdherentService } from 'src/app/services/adherent.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-details-adherent',
  templateUrl: './details-adherent.component.html',
  styleUrls: ['./details-adherent.component.scss']
})
export class DetailsAdherentComponent implements OnInit {
id :number;
idc:number;
adherenToDetails : Adherent;
list_date_enfant :Enregistrement[];
visibilite_file :boolean;
filenames: string[] = [];
fileStatus = { status: '', requestType: '', percent: 0 };
  constructor(private categoryService:CategoryService,private adherentService:AdherentService,private router :ActivatedRoute,private route :Router) { }

  ngOnInit(): void {
    this.visibilite_file =false;
    this.id = this.router.snapshot.params['id'];

    this.adherentService.detailsAdherent(this.id).subscribe(
      (response: Adherent) => {
    
         console.log(response);
         this.adherenToDetails =  response
    
         
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
  

  this.categoryService.select_enfants_byid(this.id).subscribe(enregistrement => this.list_date_enfant=enregistrement);

  
  }

  onChangeinput_file(event: any)
  {
    this.idc = event.target.value;

    console.log(" date selectionner est  " +this.idc);

    this.visibilite_file =true;
  }

   // define a function to upload files
   /*onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name); }
    this.adherentService.upload(formData).subscribe(
      event => {
        console.log(event);
     //   this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  // define a function to download files
  onDownloadFile(filename: string): void {
    this.adherentService.download(filename).subscribe(
      event => {
        console.log(event);
   //     this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  /*private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
          break;
      
    }
  }
  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }*/

  


}
