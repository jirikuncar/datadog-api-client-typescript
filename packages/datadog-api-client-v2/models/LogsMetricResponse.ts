/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricResponseData } from "./LogsMetricResponseData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The log-based metric object.
 */

export class LogsMetricResponse {
  "data"?: LogsMetricResponseData;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "LogsMetricResponseData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsMetricResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsMetricResponse {
    const res = new LogsMetricResponse();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "LogsMetricResponseData",
      ""
    );

    return res;
  }

  static serialize(data: LogsMetricResponse): { [key: string]: any } {
    const attributeTypes = LogsMetricResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "LogsMetricResponseData",
      ""
    );

    return res;
  }

  public constructor() {}
}