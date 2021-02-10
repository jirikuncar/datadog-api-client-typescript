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
 * A JSON list of the ID or IDs of the Synthetic tests that you want to delete.
 */
export class SyntheticsDeleteTestsPayload {
  /**
   * An array of Synthetic test IDs you want to delete.
   */
  "publicIds"?: Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "publicIds",
      baseName: "public_ids",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SyntheticsDeleteTestsPayload.attributeTypeMap;
  }

  public constructor() {}
}
