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

import { LogsArchiveOrderDefinition } from "./LogsArchiveOrderDefinition";
import { HttpFile } from "../http/http";

/**
 * A ordered list of archive IDs.
 */
export class LogsArchiveOrder {
  "data"?: LogsArchiveOrderDefinition;

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
      type: "LogsArchiveOrderDefinition",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return LogsArchiveOrder.attributeTypeMap;
  }

  public constructor() {}
}
