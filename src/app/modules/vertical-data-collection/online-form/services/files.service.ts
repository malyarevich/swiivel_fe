import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilesService {

  constructor(
    private http: HttpClient
  ) {}

  private token = '?api_token=' + environment.api_token;

  getFileFromServer(url: string) {
    // this.http.get(url+this.token).subscribe(data=>this.downloadFile(data)),
    this.http.get(url + this.token).subscribe(
      data => this.downloadFile(data),
      error => console.log('Error downloading the file.'),
      () => console.info('OK')
    );
  }

  public uploadFileToServer(formId: string, formData: FormData): Observable<any> {
    const url = environment.apiFB + '/online-form/upload/' + formId + this.token;
    return this.http.post(url, formData, {reportProgress: true, observe: 'events'});
  }

  downloadFile(data) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  public formatFileSize(bytes: number): string {
    let val = bytes / 1024;
    let suffix;
    if (val < 1000) {
      suffix = 'KB';
    } else {
      val = val / 1024;
      if (val < 1000) {
        suffix = 'MB';
      } else {
        val = val / 1024;
        if (val < 1000) {
          suffix = 'GB';
        } else {
          val = val / 1024;
          suffix = 'TB';
        }
      }
    }
    return val.toFixed(2) + suffix;
  }
}
