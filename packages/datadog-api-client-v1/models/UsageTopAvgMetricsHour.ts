/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageMetricCategory } from "./UsageMetricCategory";

export class UsageTopAvgMetricsHour {
  /**
   * Average number of timeseries per hour in which the metric occurs.
   */
  "avgMetricHour"?: number;
  /**
   * Maximum number of timeseries per hour in which the metric occurs.
   */
  "maxMetricHour"?: number;
  "metricCategory"?: UsageMetricCategory;
  /**
   * Contains the custom metric name.
   */
  "metricName"?: string;

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
    avgMetricHour: {
      name: "avgMetricHour",
      baseName: "avg_metric_hour",
      type: "number",
      required: false,
      format: "int64",
    },
    maxMetricHour: {
      name: "maxMetricHour",
      baseName: "max_metric_hour",
      type: "number",
      required: false,
      format: "int64",
    },
    metricCategory: {
      name: "metricCategory",
      baseName: "metric_category",
      type: "UsageMetricCategory",
      required: false,
    },
    metricName: {
      name: "metricName",
      baseName: "metric_name",
      type: "string",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return UsageTopAvgMetricsHour.attributeTypeMap;
  }

  public constructor() {}
}
