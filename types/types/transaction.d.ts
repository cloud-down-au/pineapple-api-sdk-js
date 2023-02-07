import { TransactionsProvider } from "./transactions-provider";
import { MerchantDetails } from "./merchant-details";
import { ResourceIdentifier } from "./resource-identifier";
import { Categorisation } from "./categorisation";

/**
 * Represents a copy of an account held with a financial institution.
 *
 * Data is current as of the last time Pineapple synchronised with the provider of the
 * data (eg: Basiq)
 */
export interface Transaction {
  /** The amount of the transaction. */
  amount: string;

  /** A list of transaction categorisations */
  categories?: Categorisation[];

  /** The timestamp of when the transaction data was entered into Pineapple. */
  createdAt: string;

  /** A description of the transaction as entered by the account owner. */
  guestDescription: string;

  /** The identifier for the transaction */
  id: ResourceIdentifier;

  /** The timestamp of when the transaction data was last updated in Pineapple. */
  lastUpdatedAt: string;

  /**
   * List of merchant details for a transaction.
   *
   * If no merchant details are present for a transaction, or if the `merchant_details` flag
   * was not set, the list will be empty.
   */
  merchantDetails?: MerchantDetails[];

  /** A more human readable form of the transaction description, if one is provided. */
  prettyDescription: string;

  /** A description of the transaction as provided by the underlying institution. */
  rawDescription: string;

  /** The provider that gave Pineapple the transaction data */
  provider: TransactionsProvider;

  /** The timestamp of when the transaction occurred according to the provider. */
  transactionDate: string;
}
