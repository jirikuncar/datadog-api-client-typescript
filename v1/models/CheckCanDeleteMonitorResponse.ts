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

import { CheckCanDeleteMonitorResponseData } from "./CheckCanDeleteMonitorResponseData";
import { HttpFile } from "../http/http";

/**
 * Response of monitor IDs that can or can't be safely deleted.
 */
export class CheckCanDeleteMonitorResponse {
  "data": CheckCanDeleteMonitorResponseData;
  /**
   * A mapping of Monitor ID to strings denoting where it's used.
   */
  "errors"?: { [key: string]: Array<string> };

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
      type: "CheckCanDeleteMonitorResponseData",
      format: "",
    },
    {
      name: "errors",
      baseName: "errors",
      type: "{ [key: string]: Array<string>; }",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return CheckCanDeleteMonitorResponse.attributeTypeMap;
  }

  public constructor() {}
}
