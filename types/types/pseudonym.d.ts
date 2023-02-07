import { Provider } from "./provider";

/**
 * A pseudonym is an identifier for a Pineapple customer that exists in a third party system.
 *
 * The pseudonym can be used to interact directly with the third party system where appropriate,
 * and where permission has been given.
 */
export interface CustomerPseudonym {
  /** The identifier of the customer in a third party system. */
  pseudonym: string;

  /** The provider that has provided the pseudonym. */
  provider: Provider;
}
