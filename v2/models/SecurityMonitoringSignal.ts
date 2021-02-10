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

import { SecurityMonitoringSignalAttributes } from "./SecurityMonitoringSignalAttributes";
import { SecurityMonitoringSignalType } from "./SecurityMonitoringSignalType";
import { HttpFile } from "../http/http";

/**
 * Object description of a security signal.
 */
export class SecurityMonitoringSignal {
  "attributes"?: SecurityMonitoringSignalAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id"?: string;
  "type"?: SecurityMonitoringSignalType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "attributes",
      baseName: "attributes",
      type: "SecurityMonitoringSignalAttributes",
      format: "",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "SecurityMonitoringSignalType",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SecurityMonitoringSignal.attributeTypeMap;
  }

  public constructor() {}
}
