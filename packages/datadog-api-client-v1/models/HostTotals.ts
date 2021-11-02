/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class HostTotals {
  /**
   * Total number of active host (UP and ???) reporting to Datadog.
   */
  "totalActive"?: number;
  /**
   * Number of host that are UP and reporting to Datadog.
   */
  "totalUp"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      name: string;
      baseName: string;
      type: string;
      required: boolean;
      format?: string;
    };
  } = {
    totalActive: {
      name: "totalActive",
      baseName: "total_active",
      type: "number",
      required: false,
      format: "int64",
    },
    totalUp: {
      name: "totalUp",
      baseName: "total_up",
      type: "number",
      required: false,
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return HostTotals.attributeTypeMap;
  }

  public constructor() {}
}
