export interface FormPayment{
  name: string;
  isActive: boolean;
  type: FormPaymentType;
}

interface FormPaymentType {
  value: number;
  name: string
}
