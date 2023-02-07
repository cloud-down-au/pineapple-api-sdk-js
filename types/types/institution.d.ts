/**
 * An institution holds financial data and provides financial services. They are the
 * ultimate source of truth for accounts and transaction data.
 *
 * Pineapple sources data from an institution via a provider eg: Basiq.
 */
export interface Institution {
  /** A provider specific identifier */
  key?: string;

  /** A provider specific display name. */
  displayName?: string;
}
