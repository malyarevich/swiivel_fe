export interface FeeTemplatesData {
  total: number,
  fee_templates: FeeTemplate[],
}

export interface FeeTemplate {
  id: number,
  name: string,
  description: string,
  deposit_account: string,
  deposit_id: number,
  service_type: string,
}