export interface FormPayment{
  name: string;
  isActive: boolean;
  type: FormPaymentType;
  payMore: PayMore;
}

interface FormPaymentType {
  value: number;
  name: number;
}

interface PayMore {
  isAllow: boolean;
  isActive: boolean;
}

export const TYPE_NAME = {
  fixed: 0,
  percentage: 1,
  full: 2,
};
