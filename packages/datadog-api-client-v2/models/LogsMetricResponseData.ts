/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricResponseAttributes } from "./LogsMetricResponseAttributes";
import { LogsMetricType } from "./LogsMetricType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The log-based metric properties.
 */

export class LogsMetricResponseData {
  "attributes"?: LogsMetricResponseAttributes;
  /**
   * The name of the log-based metric.
   */
  "id"?: string;
  "type"?: LogsMetricType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "LogsMetricResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricResponseData.attributeTypeMap;
  }

  public constructor() {}
}
