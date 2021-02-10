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

import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { HttpFile } from "../http/http";

/**
 * Relationship to multiple permissions objects.
 */
export class RelationshipToPermissions {
  /**
   * Relationships to permission objects.
   */
  "data"?: Array<RelationshipToPermissionData>;

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
      type: "Array<RelationshipToPermissionData>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return RelationshipToPermissions.attributeTypeMap;
  }

  public constructor() {}
}
