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
 * List of the different monitor threshold available.
 */
export class MonitorThresholds {
  /**
   * The monitor `CRITICAL` threshold.
   */
  "critical"?: number;
  /**
   * The monitor `CRITICAL` recovery threshold.
   */
  "criticalRecovery"?: number;
  /**
   * The monitor `OK` threshold.
   */
  "ok"?: number;
  /**
   * The monitor UNKNOWN threshold.
   */
  "unknown"?: number;
  /**
   * The monitor `WARNING` threshold.
   */
  "warning"?: number;
  /**
   * The monitor `WARNING` recovery threshold.
   */
  "warningRecovery"?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "critical",
      baseName: "critical",
      type: "number",
      format: "double",
    },
    {
      name: "criticalRecovery",
      baseName: "critical_recovery",
      type: "number",
      format: "double",
    },
    {
      name: "ok",
      baseName: "ok",
      type: "number",
      format: "double",
    },
    {
      name: "unknown",
      baseName: "unknown",
      type: "number",
      format: "double",
    },
    {
      name: "warning",
      baseName: "warning",
      type: "number",
      format: "double",
    },
    {
      name: "warningRecovery",
      baseName: "warning_recovery",
      type: "number",
      format: "double",
    },
  ];

  static getAttributeTypeMap() {
    return MonitorThresholds.attributeTypeMap;
  }

  public constructor() {}
}
