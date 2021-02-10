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
 * A service level objective response containing the requested history.
 */
export class SLOHistoryResponseError {
  /**
   * Human readable error.
   */
  "error"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "error",
      baseName: "error",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SLOHistoryResponseError.attributeTypeMap;
  }

  public constructor() {}
}
