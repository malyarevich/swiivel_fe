import { Document } from './document.model';

export interface ExtremeUploadForms {
  previous_form?: Document;
  next_form?: Document;
}

export interface ExtremeUploadForm {
  family_name: string;
  form_id: string;
  form_name: string;
  status: string;
}
