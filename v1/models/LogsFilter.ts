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

import { HttpFile } from "../http/http";

/**
 * Filter for logs.
 */
export class LogsFilter {
  /**
   * The filter query.
   */
  "query"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "query",
      baseName: "query",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsFilter.attributeTypeMap;
  }

  public constructor() {}
}
