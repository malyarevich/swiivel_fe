import { ExtremeUploadForm } from '@models/upload-review-form/forms.model';

export interface Document {
  bucketId: string;
  content_type: string;
  created_at: string;
  entity_id: string;
  entity_type: string;
  entity_name: string;
  person_name: string;
  family_id: string;
  file_name: string;
  file_origin_name: string;
  form_id: string;
  form_template_id: string;
  hash: string;
  link: string;
  objectId: string;
  person_id: string;
  submission_type: string;
  updated_at: string; 
  _id: string;
  status?: string;
  isSelected?: boolean;
  rotate?: string;
  next_form: ExtremeUploadForm;
  previous_form: ExtremeUploadForm;
}
