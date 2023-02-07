/**
 * Represents what details can be updated for an existing set of wellbeing scores.
 */
export interface WellbeingScoresUpdates {
  /**
   * The customer's survey score.
   *
   * Must be a minimum of 0.
   */
  surveyScore: number;

  /** The customers username to update scores for. */
  username: string;
}
