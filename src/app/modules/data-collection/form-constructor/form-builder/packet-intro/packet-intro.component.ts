import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-packet-intro',
  templateUrl: './packet-intro.component.html',
  styleUrls: ['./packet-intro.component.scss']
})
export class PacketIntroComponent implements OnInit {

  @Input() set packetIntro(p: any) {
    if (p) {
      this.packetIntroduction = p;
      this.textareaControl.setValue(p.content);
    }
  }

  packetIntroduction = {
    content: '',
    sectionName: 'Packet Introduction',
    sectionWidth: 'full'
  }
  textareaControl: FormControl = new FormControl(null);

  private destroyed$ = new Subject();

  constructor() {
    this.textareaControl.valueChanges.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(value => {
      this.setIntroContent(value);
    });
  }

  ngOnInit() {
  }

  setIntroContent(value: string) {
    this.packetIntroduction.content = value;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

}
