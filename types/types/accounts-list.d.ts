import { AccountMetadata } from "./account-metadata";
import { Account } from "./account";

/**
 * A list of accounts for a given customer
 */
export interface AccountsList {
  accounts: Account[];

  /** Meta data about a customer's accounts list */
  meta: AccountMetadata;
}
