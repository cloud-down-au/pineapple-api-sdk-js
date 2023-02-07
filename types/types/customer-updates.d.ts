/**
 * Represents what details can be updated for an existing customer.
 *
 * Policies can only be accepted when updating a customer. Otherwise a validation error
 * will be returned.
 */
export interface CustomerUpdates {
  /** Whether the customer has accepted Pineapple's Data Sharing Agreement */
  acceptedDataSharingAgreement?: boolean;

  /** Whether the customer has accepted Pineapple's Privacy Agreement */
  acceptedPrivacyAgreement?: boolean;

  /** Whether the customer has accepted Pineapple's Terms and Conditions */
  acceptedTermsAndConditions?: boolean;

  /** The name the customer prefers to be called. */
  displayName?: string;
}
