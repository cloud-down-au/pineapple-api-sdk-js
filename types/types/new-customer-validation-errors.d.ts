import { NewCustomerValidationErrorMessages } from "./new-customer-validation-error-messages";

export interface NewCustomerValidationErrors {
  /** The HTTP status code */
  statusCode: number;

  /** The HTTP status message */
  error: string;

  message?: NewCustomerValidationErrorMessages[];
}
