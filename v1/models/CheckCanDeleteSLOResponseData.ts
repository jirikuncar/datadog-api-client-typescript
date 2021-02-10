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
 * An array of service level objective objects.
 */
export class CheckCanDeleteSLOResponseData {
  /**
   * An array of of SLO IDs that can be safely deleted.
   */
  "ok"?: Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "ok",
      baseName: "ok",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return CheckCanDeleteSLOResponseData.attributeTypeMap;
  }

  public constructor() {}
}
