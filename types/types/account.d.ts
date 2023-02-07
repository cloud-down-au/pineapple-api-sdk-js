import { AccountsProvider } from "./accounts-provider";
import { Institution } from "./institution";
import { ResourceIdentifier } from "./resource-identifier";

/**
 * Represents a copy of an account held with a financial institution.
 *
 * Data is current as of the last time Pineapple synchronised with the provider of the
 * data (eg: Basiq)
 */
export interface Account {
  /**
   * The name of the account given by the owning institution. This is often non editable
   * by the customer.
   */
  accountName: string;

  /** The account number with the owning institution. */
  accountNumber: string;

  /** If applicable, BSB of the account, or blank. May or may not contain a dash. */
  bsb: string;

  /** The timestamp of when the account was entered into Pineapple. */
  createdAt: string;

  /** The amount in the account */
  currentBalance: string;

  /** The identifier for the account */
  id: ResourceIdentifier;

  /** The institution the account was sourced from. */
  institution: Institution;

  /** The timestamp of when the account was last updated in Pineapple. */
  lastUpdatedAt: string;

  /**
   * An account nickname. Defaults to `accountName`, but is often editable by the
   * customer.
   */
  nickname: string;

  /** The provider that gave Pineapple the account data. */
  provider: AccountsProvider;

  /**
   * The designated sub type of account from the provider. The enum is not exhaustive and new
   * account subtypes may appear over time.
   */
  subtype: string;

  /**
   * The designated type of account from the provider. The enum is not exhaustive and new
   * account types may appear over time.
   */
  type: string;
}
