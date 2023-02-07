import { ResourceIdentifier } from "./resource-identifier";

/**
 * Represents details of a Pineapple customer.
 */
export interface Customer {
  /** Whether the customer has accepted Pineapple's Data Sharing Agreement */
  acceptedDataSharingAgreement: boolean;

  /** Whether the customer has accepted Pineapple's Privacy Agreement */
  acceptedPrivacyAgreement: boolean;

  /** Whether the customer has accepted Pineapple's Terms and Conditions */
  acceptedTermsAndConditions: boolean;

  /** The name the customer prefers to be called. */
  displayName: string;

  /** The identifier for the customer */
  id: ResourceIdentifier;

  /** The customers username. */
  username: string;
}
