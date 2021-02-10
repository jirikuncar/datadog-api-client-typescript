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
 * The Markdown timeline cell contents.
 */
export class IncidentTimelineCellMarkdownCreateAttributesContent {
  /**
   * The Markdown content of the cell.
   */
  "content"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "content",
      baseName: "content",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return IncidentTimelineCellMarkdownCreateAttributesContent.attributeTypeMap;
  }

  public constructor() {}
}
