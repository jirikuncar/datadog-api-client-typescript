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

import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeysType } from "./ApplicationKeysType";
import { FullApplicationKeyAttributes } from "./FullApplicationKeyAttributes";
import { HttpFile } from "../http/http";

/**
 * Datadog application key.
 */
export class FullApplicationKey {
  "attributes"?: FullApplicationKeyAttributes;
  /**
   * ID of the application key.
   */
  "id"?: string;
  "relationships"?: ApplicationKeyRelationships;
  "type"?: ApplicationKeysType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "attributes",
      baseName: "attributes",
      type: "FullApplicationKeyAttributes",
      format: "",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
      format: "",
    },
    {
      name: "relationships",
      baseName: "relationships",
      type: "ApplicationKeyRelationships",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "ApplicationKeysType",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return FullApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
