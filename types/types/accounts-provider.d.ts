import { AggregationState } from "./aggregation-state";

/**
 * An account provider is a Provider that Pineapple specifically sources account data from, for
 * example Basiq.
 *
 * 'Aggregation' is the act of the account provider connecting to the owning financial institution
 * and sourcing account and transaction information.
 */
export interface AccountsProvider {
  /** The name of the provider */
  name: string;

  /** What state the provider is in with respect to aggregating financial data. */
  aggregationState: AggregationState;

  /**
   * A provider specific value indicating the outcome of the last attempt to aggregate data
   * from the owning institution.
   */
  aggregationStatus: string;

  /** The timestamp of when the account was first aggregated by the provider. */
  createdAt: string;

  /** The timestamp of when the provider last tried to aggregate the account data. */
  lastAggregationAttemptAt: string;

  /**
   * The timestamp of when account data was last successfully aggregated.
   *
   * If aggregation attempts routinely fail, this value can help Pineapple clients know
   * how old the account data is.
   */
  lastAggregationSuccessAt: string;

  /** The timestamp of when the account was last updated in the providers system. */
  lastUpdatedAt: string;
}
