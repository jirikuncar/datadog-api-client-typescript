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
 * Alerting time window options.
 */
export class MonitorThresholdWindowOptions {
  /**
   * Describes how long an anomalous metric must be normal before the alert recovers.
   */
  "recoveryWindow"?: string;
  /**
   * Describes how long a metric must be anomalous before an alert triggers.
   */
  "triggerWindow"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "recoveryWindow",
      baseName: "recovery_window",
      type: "string",
      format: "",
    },
    {
      name: "triggerWindow",
      baseName: "trigger_window",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return MonitorThresholdWindowOptions.attributeTypeMap;
  }

  public constructor() {}
}
