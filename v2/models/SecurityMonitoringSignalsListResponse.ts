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

import { SecurityMonitoringSignal } from "./SecurityMonitoringSignal";
import { SecurityMonitoringSignalsListResponseLinks } from "./SecurityMonitoringSignalsListResponseLinks";
import { SecurityMonitoringSignalsListResponseMeta } from "./SecurityMonitoringSignalsListResponseMeta";
import { HttpFile } from "../http/http";

/**
 * The response object with all security signals matching the request and pagination information.
 */
export class SecurityMonitoringSignalsListResponse {
  /**
   * An array of security signals matching the request.
   */
  "data"?: Array<SecurityMonitoringSignal>;
  "links"?: SecurityMonitoringSignalsListResponseLinks;
  "meta"?: SecurityMonitoringSignalsListResponseMeta;

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
      type: "Array<SecurityMonitoringSignal>",
      format: "",
    },
    {
      name: "links",
      baseName: "links",
      type: "SecurityMonitoringSignalsListResponseLinks",
      format: "",
    },
    {
      name: "meta",
      baseName: "meta",
      type: "SecurityMonitoringSignalsListResponseMeta",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SecurityMonitoringSignalsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
