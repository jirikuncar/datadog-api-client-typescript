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

import { LogsMetricUpdateData } from "./LogsMetricUpdateData";
import { HttpFile } from "../http/http";

/**
 * The new log-based metric body.
 */
export class LogsMetricUpdateRequest {
  "data": LogsMetricUpdateData;

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
      type: "LogsMetricUpdateData",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsMetricUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
