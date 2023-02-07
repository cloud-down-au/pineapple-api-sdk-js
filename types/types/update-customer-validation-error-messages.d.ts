import { EqualsTrueConstraint } from "./equal-true";
import { IsBooleanConstraint } from "./is-boolean";
import { IsNotEmptyConstraint } from "./is-not-empty";

/**
 * The different type of validation error messages that can be returned when updating a customer.
 */
export interface UpdateCustomerValidationErrorMessages {
  /** The property in the input request that failed validation */
  property: string;

  /**
   * The value of the property that failed validation.
   *
   * May not be present if a required input property was not provided.
   */
  value?: string;

  constraints:
    | EqualsTrueConstraint
    | IsBooleanConstraint
    | IsNotEmptyConstraint;
}
