/**
 * Meta data about a customer's accounts list
 */
export interface AccountMetadata {
  /** The timestamp of when Pineapple last tried to synchronise the customer's accounts. */
  lastSynchroniseAttemptTime: string;
}
