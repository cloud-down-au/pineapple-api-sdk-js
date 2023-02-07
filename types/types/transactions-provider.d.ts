/**
 * A transaction provider is a Provider that Pineapple sources transaction date from, for example
 * Basiq.
 */
export interface TransactionsProvider {
  /** The name of the provider */
  name: string;

  /** The timestamp of when the account was first aggregated by the provider. */
  createdAt: string;

  /** The timestamp of when the account was last updated in the providers system. */
  lastUpdatedAt: string;
}
