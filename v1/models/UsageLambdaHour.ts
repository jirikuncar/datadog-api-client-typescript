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
 * Number of lambda functions and sum of the invocations of all lambda functions for each hour for a given organization.
 */
export class UsageLambdaHour {
  /**
   * Contains the number of different functions for each region and AWS account.
   */
  "funcCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the sum of invocations of all functions.
   */
  "invocationsSum"?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "funcCount",
      baseName: "func_count",
      type: "number",
      format: "int64",
    },
    {
      name: "hour",
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    {
      name: "invocationsSum",
      baseName: "invocations_sum",
      type: "number",
      format: "int64",
    },
  ];

  static getAttributeTypeMap() {
    return UsageLambdaHour.attributeTypeMap;
  }

  public constructor() {}
}
