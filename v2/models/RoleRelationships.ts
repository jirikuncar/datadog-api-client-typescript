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

import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { HttpFile } from "../http/http";

/**
 * Relationships of the role object.
 */
export class RoleRelationships {
  "permissions"?: RelationshipToPermissions;
  "users"?: RelationshipToUsers;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "permissions",
      baseName: "permissions",
      type: "RelationshipToPermissions",
      format: "",
    },
    {
      name: "users",
      baseName: "users",
      type: "RelationshipToUsers",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return RoleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
