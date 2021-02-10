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

import { LogsAggregateBucketValue } from "./LogsAggregateBucketValue";
import { HttpFile } from "../http/http";

/**
 * A bucket values
 */
export class LogsAggregateBucket {
  /**
   * The key, value pairs for each group by
   */
  "by"?: { [key: string]: string };
  /**
   * A map of the metric name -> value for regular compute or list of values for a timeseries
   */
  "computes"?: { [key: string]: LogsAggregateBucketValue };

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "by",
      baseName: "by",
      type: "{ [key: string]: string; }",
      format: "",
    },
    {
      name: "computes",
      baseName: "computes",
      type: "{ [key: string]: LogsAggregateBucketValue; }",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsAggregateBucket.attributeTypeMap;
  }

  public constructor() {}
}
