import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {
  Field, GroupSectionOptions,
} from "../../../../../../../../../models/data-collection/field.model";
import {isEmpty} from "lodash";

const defaultSettingOptions: GroupSectionOptions = {
  groupPreset: 'Preset 1',
  isSupportText: true,
  supportText: 'Actually Student\'s Address',
  supportTextDisplayed: 'directly',
  isVisible: false,
  isMakeExpandButtonVisible: true,
};

@Component({
  selector: 'app-section-setting-options',
  templateUrl: './section-setting-options.component.html',
  styleUrls: ['./section-setting-options.component.scss']
})
export class SectionSettingOptionsComponent implements OnInit {
  @Input() section: Field;

  sectionSettingOptionsForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit() {
    this.initSectionSettingOptions();
    this.initSectionSettingOptionsForm();
    this.onChangesSectionSettingOptionsForm();
  }

  initSectionSettingOptions() {
    if (isEmpty(this.section.settings.options)) {
      this.section.settings.options = Object.assign(defaultSettingOptions);
    }
  }

  initSectionSettingOptionsForm() {
    this.sectionSettingOptionsForm = this.fb.group({
      groupPreset: [this.section.settings.options.groupPreset],
      isSupportText: [this.section.settings.options.isSupportText],
      supportText: [this.section.settings.options.supportText],
      supportTextDisplayed: [this.section.settings.options.supportTextDisplayed],
      isVisible: [this.section.settings.options.isVisible],
      isMakeExpandButtonVisible: [this.section.settings.options.isMakeExpandButtonVisible],
    });
  }

  onChangesSectionSettingOptionsForm() {
    this.sectionSettingOptionsForm.valueChanges.subscribe((val) => {
      this.section.settings.options = Object.assign(val);
    });
  }

}
