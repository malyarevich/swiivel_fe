export interface FormPayment{
  name: string;
  isActive: boolean;
  type: FormPaymentType;
  payMore: PayMore;
}

interface FormPaymentType {
  value: number;
  name: string
}

interface PayMore {
  isAllow: boolean;
  isActive: boolean;
}
