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
 * The number of SNMP devices for each hour for a given organization.
 */
export class UsageSNMPHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of SNMP devices.
   */
  "snmpDevices"?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "hour",
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    {
      name: "snmpDevices",
      baseName: "snmp_devices",
      type: "number",
      format: "int64",
    },
  ];

  static getAttributeTypeMap() {
    return UsageSNMPHour.attributeTypeMap;
  }

  public constructor() {}
}
