export interface FileModel {
  _id: string,
  hash: string,
  filename: string,
  formId: string,
  personId: number | null,
  link: string,
  updated_at: string,
  created_at: string
}
