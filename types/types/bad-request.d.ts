/**
 * Error returned from the API server
 */
export interface BadRequestError {
  /** The HTTP status code */
  statusCode: number;

  /** The HTTP status message */
  error: string;
}
