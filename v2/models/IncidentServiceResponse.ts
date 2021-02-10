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

import { IncidentServiceIncludedItems } from "./IncidentServiceIncludedItems";
import { IncidentServiceResponseData } from "./IncidentServiceResponseData";
import { HttpFile } from "../http/http";

/**
 * Response with an incident service payload.
 */
export class IncidentServiceResponse {
  "data": IncidentServiceResponseData;
  /**
   * Included objects from relationships.
   */
  "included"?: Array<IncidentServiceIncludedItems>;

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
      type: "IncidentServiceResponseData",
      format: "",
    },
    {
      name: "included",
      baseName: "included",
      type: "Array<IncidentServiceIncludedItems>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return IncidentServiceResponse.attributeTypeMap;
  }

  public constructor() {}
}
