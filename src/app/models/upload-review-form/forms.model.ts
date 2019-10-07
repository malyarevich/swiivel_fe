export interface ExtremeUploadForms {
  previous_form?: ExtremeUploadForm;
  next_form?: ExtremeUploadForm;
}

export interface ExtremeUploadForm {
  family_name: string;
  form_id: string;
  form_name: string;
  status: string;
}
