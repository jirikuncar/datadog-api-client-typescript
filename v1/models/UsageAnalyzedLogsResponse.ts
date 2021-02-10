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

import { UsageAnalyzedLogsHour } from "./UsageAnalyzedLogsHour";
import { HttpFile } from "../http/http";

/**
 * A response containing the number of analyzed logs for each hour for a given organization.
 */
export class UsageAnalyzedLogsResponse {
  /**
   * Get hourly usage for analyzed logs.
   */
  "usage"?: Array<UsageAnalyzedLogsHour>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "usage",
      baseName: "usage",
      type: "Array<UsageAnalyzedLogsHour>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return UsageAnalyzedLogsResponse.attributeTypeMap;
  }

  public constructor() {}
}
