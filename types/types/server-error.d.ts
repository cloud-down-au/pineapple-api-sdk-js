/**
 * Error returned from the API server
 */
export interface InternalServerError {
  /** The HTTP status code */
  statusCode: number;

  /** The HTTP status message */
  error: string;

  /** A message from the server indicating the cause or possible resolution of the error. */
  message?: string;
}
