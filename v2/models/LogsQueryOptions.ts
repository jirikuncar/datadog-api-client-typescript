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

import { HttpFile } from "../http/http";

/**
 * Global query options that are used during the query. Note: You should only supply timezone or time offset but not both otherwise the query will fail.
 */
export class LogsQueryOptions {
  /**
   * The time offset (in seconds) to apply to the query.
   */
  "timeOffset"?: number;
  /**
   * The timezone can be specified both as an offset, for example: \"UTC+03:00\".
   */
  "timezone"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "timeOffset",
      baseName: "timeOffset",
      type: "number",
      format: "int64",
    },
    {
      name: "timezone",
      baseName: "timezone",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsQueryOptions.attributeTypeMap;
  }

  public constructor() {}
}
