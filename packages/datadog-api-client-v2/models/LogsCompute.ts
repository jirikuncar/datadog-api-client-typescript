/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAggregationFunction } from "./LogsAggregationFunction";
import { LogsComputeType } from "./LogsComputeType";

export class LogsCompute {
  "aggregation": LogsAggregationFunction;
  /**
   * The time buckets' size (only used for type=timeseries) Defaults to a resolution of 150 points
   */
  "interval"?: string;
  /**
   * The metric to use
   */
  "metric"?: string;
  "type"?: LogsComputeType;

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
    aggregation: {
      name: "aggregation",
      baseName: "aggregation",
      type: "LogsAggregationFunction",
      required: true,
    },
    interval: {
      name: "interval",
      baseName: "interval",
      type: "string",
      required: false,
    },
    metric: {
      name: "metric",
      baseName: "metric",
      type: "string",
      required: false,
    },
    type: {
      name: "type",
      baseName: "type",
      type: "LogsComputeType",
      required: false,
    },
  };

  static getAttributeTypeMap() {
    return LogsCompute.attributeTypeMap;
  }

  public constructor() {}
}
