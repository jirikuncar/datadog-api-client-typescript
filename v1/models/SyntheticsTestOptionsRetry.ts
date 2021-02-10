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
 * Object describing the retry strategy to apply to a Synthetic test.
 */
export class SyntheticsTestOptionsRetry {
  /**
   * Number of times a test needs to be retried before marking a location as failed. Defaults to 0.
   */
  "count"?: number;
  /**
   * Time interval between retries (in milliseconds). Defaults to 300ms.
   */
  "interval"?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "count",
      baseName: "count",
      type: "number",
      format: "int64",
    },
    {
      name: "interval",
      baseName: "interval",
      type: "number",
      format: "double",
    },
  ];

  static getAttributeTypeMap() {
    return SyntheticsTestOptionsRetry.attributeTypeMap;
  }

  public constructor() {}
}
