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

import { SyntheticsAssertionJSONPathOperator } from "./SyntheticsAssertionJSONPathOperator";
import { SyntheticsAssertionJSONPathTargetTarget } from "./SyntheticsAssertionJSONPathTargetTarget";
import { SyntheticsAssertionType } from "./SyntheticsAssertionType";
import { HttpFile } from "../http/http";

/**
 * An assertion for the `validatesJSONPath` operator.
 */
export class SyntheticsAssertionJSONPathTarget {
  "operator": SyntheticsAssertionJSONPathOperator;
  /**
   * The associated assertion property.
   */
  "property"?: string;
  "target"?: SyntheticsAssertionJSONPathTargetTarget;
  "type": SyntheticsAssertionType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "operator",
      baseName: "operator",
      type: "SyntheticsAssertionJSONPathOperator",
      format: "",
    },
    {
      name: "property",
      baseName: "property",
      type: "string",
      format: "",
    },
    {
      name: "target",
      baseName: "target",
      type: "SyntheticsAssertionJSONPathTargetTarget",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "SyntheticsAssertionType",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SyntheticsAssertionJSONPathTarget.attributeTypeMap;
  }

  public constructor() {}
}
