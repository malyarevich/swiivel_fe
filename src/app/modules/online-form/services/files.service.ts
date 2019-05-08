import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  token = '?api_token='+environment.api_token;


  constructor(private http: HttpClient) { }

  getFileFromServer(url: string){
    this.http.get(url+this.token).subscribe(data=>this.downloadFile(data)),
      error => console.log('Error downloading the file.'),
      () => console.info('OK');
  }

  downloadFile(data) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
