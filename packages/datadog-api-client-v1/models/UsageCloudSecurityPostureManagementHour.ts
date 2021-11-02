/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageCloudSecurityPostureManagementHour {
  /**
   * The total number of Cloud Security Posture Management containers during a given hour.
   */
  "containerCount"?: number;
  /**
   * The total number of Cloud Security Posture Management hosts during a given hour.
   */
  "hostCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;

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
    containerCount: {
      name: "containerCount",
      baseName: "container_count",
      type: "number",
      required: false,
      format: "int64",
    },
    hostCount: {
      name: "hostCount",
      baseName: "host_count",
      type: "number",
      required: false,
      format: "int64",
    },
    hour: {
      name: "hour",
      baseName: "hour",
      type: "Date",
      required: false,
      format: "date-time",
    },
  };

  static getAttributeTypeMap() {
    return UsageCloudSecurityPostureManagementHour.attributeTypeMap;
  }

  public constructor() {}
}
