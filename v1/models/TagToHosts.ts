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
 * In this object, the key is the tag, the value is a list of host names that are reporting that tag.
 */
export class TagToHosts {
  /**
   * A list of tags to apply to the host.
   */
  "tags"?: { [key: string]: Array<string> };

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "tags",
      baseName: "tags",
      type: "{ [key: string]: Array<string>; }",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return TagToHosts.attributeTypeMap;
  }

  public constructor() {}
}
