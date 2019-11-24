import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilesService {

  constructor(
    private http: HttpClient
  ) {}

  private token = '?api_token=' + environment.apiToken;

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
}
