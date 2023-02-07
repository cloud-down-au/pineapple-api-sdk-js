import { IsNotEmptyConstraint } from "./is-not-empty";
import { IsNumberConstraint } from "./is-number";
import { MinValueConstraint } from "./minValue";

/**
 * The different type of validation error messages that can be returned when updating a score.
 */
export interface UpdateWellbeingScoresValidationErrorMessages {
  /** The property in the input request that failed validation */
  property: string;

  /**
   * The value of the property that failed validation.
   *
   * May not be present if a required input property was not provided.
   */
  value?: string;

  constraints: IsNotEmptyConstraint | IsNumberConstraint | MinValueConstraint;
}
