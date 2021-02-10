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

import { SecurityMonitoringSignalsListResponseMetaPage } from "./SecurityMonitoringSignalsListResponseMetaPage";
import { HttpFile } from "../http/http";

/**
 * Meta attributes.
 */
export class SecurityMonitoringSignalsListResponseMeta {
  "page"?: SecurityMonitoringSignalsListResponseMetaPage;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "page",
      baseName: "page",
      type: "SecurityMonitoringSignalsListResponseMetaPage",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SecurityMonitoringSignalsListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
