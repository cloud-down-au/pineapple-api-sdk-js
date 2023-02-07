export interface ValidationError {
  /** The property in the input request that failed validation */
  property: string;

  /**
   * The value of the property that failed validation.
   *
   * May not be present if a required input property was not provided.
   */
  value?: string;
}
