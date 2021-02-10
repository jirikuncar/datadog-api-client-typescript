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

import { HttpFile } from "../http/http";

/**
 * Attributes of a partial API key.
 */
export class PartialAPIKeyAttributes {
  /**
   * Creation date of the API key.
   */
  "createdAt"?: string;
  /**
   * The last four characters of the API key.
   */
  "last4"?: string;
  /**
   * Date the API key was last modified.
   */
  "modifiedAt"?: string;
  /**
   * Name of the API key.
   */
  "name"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "createdAt",
      baseName: "created_at",
      type: "string",
      format: "",
    },
    {
      name: "last4",
      baseName: "last4",
      type: "string",
      format: "",
    },
    {
      name: "modifiedAt",
      baseName: "modified_at",
      type: "string",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PartialAPIKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
