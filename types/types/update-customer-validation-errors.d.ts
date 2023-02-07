import { UpdateCustomerValidationErrorMessages } from "./update-customer-validation-error-messages";

export interface UpdateCustomerValidationErrors {
  /** The HTTP status code */
  statusCode: number;

  /** The HTTP status message */
  error: string;

  message?: UpdateCustomerValidationErrorMessages[];
}
