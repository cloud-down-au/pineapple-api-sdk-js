/**
 * A categorisation is a grouping of transactions for goods and services which are provided by
 * a business.
 *
 * It allows customers to easily identify types of transactions in their accounts. This can
 * allow more informed spending decisions to affect a their overall financial wellbeing.
 *
 * Pineapple allows for transactions to have multiple categorisations which allows for the use
 * of different providers for transaction categorisation services; including customer
 * assigned categorisations.
 */
export interface Categorisation {
  /** Who assigned the category to the transaction. It may be a provider, service, or a person. */
  assignedBy: string;

  /**
   * A category that has been assigned to the transaction.
   *
   * The set of possible values is dependent on the owner and may differ between providers.
   */
  category: string;

  /**
   * An optional logo to use with the category to pictorially represent the category to users.
   *
   * If present, the logo is provided by the owner and may be hosted externally to the
   * Pineapple API.
   */
  logo?: string;

  /**
   * The owner of the category. If user assigned, it will be the user, else the provider of the
   * category.
   */
  owner: string;
}
