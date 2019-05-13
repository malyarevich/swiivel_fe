import { PaymentMethodsDetails } from './paymentMethodsDetails.model';

export interface PaymentMethods {
  details: PaymentMethodsDetails;
  id: number;
  name: string;
  priority: number;
  type: string;
}

