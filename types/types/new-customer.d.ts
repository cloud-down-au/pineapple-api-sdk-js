/**
 * Represents the information required to originate a new customer in Pineapple.
 */
export interface NewCustomer {
  /** Whether the customer has accepted Pineapple's Data Sharing Agreement */
  acceptedDataSharingAgreement?: boolean;

  /** Whether the customer has accepted Pineapple's Privacy Agreement */
  acceptedPrivacyAgreement?: boolean;

  /** Whether the customer has accepted Pineapple's Terms and Conditions */
  acceptedTermsAndConditions?: boolean;

  /** The name the customer prefers to be called. */
  displayName?: string;

  /** The customers username. */
  username: string;
}
