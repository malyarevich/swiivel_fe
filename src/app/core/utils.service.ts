import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  copyTextToClipboard(str: string): Promise<void> {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(str);
    }
    return new Promise((resolve, reject) => {
      const range = document.createRange();
      range.selectNodeContents(document.body);
      document.getSelection().addRange(range);

      let success = false;
      const listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', str);
        e.preventDefault();
        success = true;
      };

      document.addEventListener('copy', listener);
      document.execCommand('copy');
      document.removeEventListener('copy', listener);

      document.getSelection().removeAllRanges();

      success ? resolve() : reject();
    });
  }
}
