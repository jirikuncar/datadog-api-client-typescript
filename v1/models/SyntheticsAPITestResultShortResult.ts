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

import { SyntheticsTiming } from "./SyntheticsTiming";
import { HttpFile } from "../http/http";

/**
 * Result of the last API test run.
 */
export class SyntheticsAPITestResultShortResult {
  "timings"?: SyntheticsTiming;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "timings",
      baseName: "timings",
      type: "SyntheticsTiming",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SyntheticsAPITestResultShortResult.attributeTypeMap;
  }

  public constructor() {}
}
