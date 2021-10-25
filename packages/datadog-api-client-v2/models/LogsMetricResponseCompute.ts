/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricResponseComputeAggregationType } from "./LogsMetricResponseComputeAggregationType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The compute rule to compute the log-based metric.
 */

export class LogsMetricResponseCompute {
  "aggregationType"?: LogsMetricResponseComputeAggregationType;
  /**
   * The path to the value the log-based metric will aggregate on (only used if the aggregation type is a \"distribution\").
   */
  "path"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    aggregationType: {
      baseName: "aggregation_type",
      type: "LogsMetricResponseComputeAggregationType",
      format: "",
    },
    path: {
      baseName: "path",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsMetricResponseCompute.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsMetricResponseCompute {
    const res = new LogsMetricResponseCompute();

    if (["count", "distribution", undefined].includes(data.aggregation_type)) {
      res.aggregationType = data.aggregation_type;
    } else {
      const raw = new LogsMetricResponseCompute();
      raw.unparsedObject = data;
      return raw;
    }

    res.path = ObjectSerializer.deserialize(data.path, "string", "");

    return res;
  }

  static serialize(data: LogsMetricResponseCompute): { [key: string]: any } {
    const attributeTypes = LogsMetricResponseCompute.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (["count", "distribution", undefined].includes(data.aggregationType)) {
      res.aggregation_type = data.aggregationType;
    } else {
      throw TypeError(
        `invalid enum value ${data.aggregationType} for aggregationType`
      );
    }

    res.path = ObjectSerializer.serialize(data.path, "string", "");

    return res;
  }

  public constructor() {}
}