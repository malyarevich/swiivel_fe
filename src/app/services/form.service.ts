import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormService {
  createSharedUrl(id: string) {
    return `${window.location.origin}/view-form/${id}`;
  }
}
