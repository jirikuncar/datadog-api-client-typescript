/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageAuditLogsHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The total number of audit logs lines indexed during a given hour.
   */
  "linesIndexed"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      name: string;
      baseName: string;
      type: string;
      required: boolean;
      format?: string;
      enumValues?: any;
    };
  } = {
    hour: {
      name: "hour",
      baseName: "hour",
      type: "Date",
      required: false,
      format: "date-time",
    },
    linesIndexed: {
      name: "linesIndexed",
      baseName: "lines_indexed",
      type: "number",
      required: false,
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageAuditLogsHour.attributeTypeMap;
  }

  public constructor() {}
}
