import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sw-form-creator-workarea-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class WorkareaIntroComponent {

  lform: FormGroup;

  @Input()
  set form(_form: any) {
    if (_form) {
      if (!_form.get('packetIntroduction')) {
        _form.addControl('packetIntroduction', this.fb.group({
          sectionName: ['Packet Introduction'],
          sectionWidth: ['full'],
          content: ['']
        }));
      }
      this.lform = _form.get('packetIntroduction');
    }
  }

  constructor(private fb: FormBuilder) {
    this.lform = this.fb.group({
      sectionName: ['Packet Introduction'],
      sectionWidth: ['full'],
      content: ['']
    });
  }

}
