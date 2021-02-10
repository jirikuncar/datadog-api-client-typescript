/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Log } from "./Log";
import { HttpFile } from "../http/http";

/**
 * Response object with all logs matching the request and pagination information.
 */
export class LogsListResponse {
  /**
   * Array of logs matching the request and the `nextLogId` if sent.
   */
  "logs"?: Array<Log>;
  /**
   * Hash identifier of the next log to return in the list. This parameter is used for the pagination feature.
   */
  "nextLogId"?: string;
  /**
   * Status of the response.
   */
  "status"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "logs",
      baseName: "logs",
      type: "Array<Log>",
      format: "",
    },
    {
      name: "nextLogId",
      baseName: "nextLogId",
      type: "string",
      format: "",
    },
    {
      name: "status",
      baseName: "status",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
