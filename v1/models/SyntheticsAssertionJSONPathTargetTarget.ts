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
 * Composed target for `validatesJSONPath` operator.
 */
export class SyntheticsAssertionJSONPathTargetTarget {
  /**
   * The JSON path to assert.
   */
  "jsonPath"?: string;
  /**
   * The specific operator to use on the path.
   */
  "operator"?: string;
  /**
   * The path target value to compare to.
   */
  "targetValue"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "jsonPath",
      baseName: "jsonPath",
      type: "string",
      format: "",
    },
    {
      name: "operator",
      baseName: "operator",
      type: "string",
      format: "",
    },
    {
      name: "targetValue",
      baseName: "targetValue",
      type: "any",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SyntheticsAssertionJSONPathTargetTarget.attributeTypeMap;
  }

  public constructor() {}
}
