/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricResponseData } from "./LogsMetricResponseData";
import { HttpFile } from "../http/http";

/**
 * All the available log-based metric objects.
 */
export class LogsMetricsResponse {
  /**
   * A list of log-based metric objects.
   */
  "data"?: Array<LogsMetricResponseData>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "Array<LogsMetricResponseData>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
