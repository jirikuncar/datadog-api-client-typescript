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
 * Object to handle basic authentication when performing the test.
 */
export class SyntheticsBasicAuth {
  /**
   * Password to use for the basic authentication.
   */
  "password": string;
  /**
   * Username to use for the basic authentication.
   */
  "username": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "password",
      baseName: "password",
      type: "string",
      format: "",
    },
    {
      name: "username",
      baseName: "username",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SyntheticsBasicAuth.attributeTypeMap;
  }

  public constructor() {}
}
