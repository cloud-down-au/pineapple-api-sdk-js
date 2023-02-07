/**
 * Information about the merchant where a transaction occurred.
 */
export interface MerchantDetails {
  /** Any other names the merchant might be called by. */
  aliases: string[];

  /** An optional link to an image file to use as the logo for the merchant. */
  logo?: string;

  /** The name of the merchant */
  name: string;
}
