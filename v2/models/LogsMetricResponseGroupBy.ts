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
 * A group by rule.
 */
export class LogsMetricResponseGroupBy {
  /**
   * The path to the value the log-based metric will be aggregated over.
   */
  "path"?: string;
  /**
   * Eventual name of the tag that gets created. By default, the path attribute is used as the tag name.
   */
  "tagName"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "path",
      baseName: "path",
      type: "string",
      format: "",
    },
    {
      name: "tagName",
      baseName: "tag_name",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsMetricResponseGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
