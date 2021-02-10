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

import { SLOCorrectionListResponseData } from "./SLOCorrectionListResponseData";
import { HttpFile } from "../http/http";

/**
 * A list of  SLO correction objects
 */
export class SLOCorrectionListResponse {
  /**
   * The list of of SLO corrections objects
   */
  "data"?: Array<SLOCorrectionListResponseData>;

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
      type: "Array<SLOCorrectionListResponseData>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SLOCorrectionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
