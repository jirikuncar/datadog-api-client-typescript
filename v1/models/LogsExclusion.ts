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

import { LogsExclusionFilter } from "./LogsExclusionFilter";
import { HttpFile } from "../http/http";

/**
 * Represents the index exclusion filter object from configuration API.
 */
export class LogsExclusion {
  "filter"?: LogsExclusionFilter;
  /**
   * Whether or not the exclusion filter is active.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the index exclusion filter.
   */
  "name": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "filter",
      baseName: "filter",
      type: "LogsExclusionFilter",
      format: "",
    },
    {
      name: "isEnabled",
      baseName: "is_enabled",
      type: "boolean",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsExclusion.attributeTypeMap;
  }

  public constructor() {}
}
