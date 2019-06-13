import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-person-avatar-change',
  templateUrl: './person-avatar-change.component.html',
  styleUrls: ['./person-avatar-change.component.scss']
})
export class PersonAvatarChangeComponent implements OnInit {
  @Output() changeAvatarEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Input() avatar: string;
  @Input() size: string;
  @Input() editable: boolean = true;
  avatarBase64:  string | ArrayBuffer;
  hover: boolean = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.avatarBase64 = reader.result;
        this.changeAvatarEmitter.emit(this.avatarBase64);
        this.cd.markForCheck();
      };
    }
  }

}
