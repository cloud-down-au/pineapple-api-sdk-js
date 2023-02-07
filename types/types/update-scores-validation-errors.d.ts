import { UpdateWellbeingScoresValidationErrorMessages } from "./update-scores-validation-error-messages";

export interface UpdateWellbeingScoresValidationErrors {
  /** The HTTP status code */
  statusCode: number;

  /** The HTTP status message */
  error: string;

  message?: UpdateWellbeingScoresValidationErrorMessages[];
}
