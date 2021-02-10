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
 * Attributes of the created user.
 */
export class UserCreateAttributes {
  /**
   * The email of the user.
   */
  "email": string;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * The title of the user.
   */
  "title"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "email",
      baseName: "email",
      type: "string",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return UserCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
