/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The number of analyzed logs for each hour for a given organization.
 */

export class UsageAnalyzedLogsHour {
  /**
   * Contains the number of analyzed logs.
   */
  "analyzedLogs"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    analyzedLogs: {
      baseName: "analyzed_logs",
      type: "number",

      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",

      format: "date-time",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageAnalyzedLogsHour.attributeTypeMap;
  }

  public constructor() {}
}
