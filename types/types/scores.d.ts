/**
 * Represents the customers financial wellbeing scores.
 */
export interface WellbeingScores {
  /** The customer's survey score */
  surveyScore?: number;

  /** The customer's dishonours score */
  dishonoursScore?: number;

  /** The customer's payday score */
  paydayScore?: number;

  /** The customer's solvency, assets score */
  solvencyAssetsScore?: number;

  /** The customer's solvency, assets, and credit score */
  solvencyAssetsAndCreditScore?: number;

  /** The customer's balance percentile score */
  balancePercentileScore?: number;
}
