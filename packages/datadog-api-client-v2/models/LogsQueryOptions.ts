/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Global query options that are used during the query. Note: You should only supply timezone or time offset but not both otherwise the query will fail.
 */

export class LogsQueryOptions {
  /**
   * The time offset (in seconds) to apply to the query.
   */
  "timeOffset"?: number;
  /**
   * The timezone can be specified both as an offset, for example: \"UTC+03:00\".
   */
  "timezone"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    timeOffset: {
      baseName: "timeOffset",
      type: "number",
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsQueryOptions.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsQueryOptions {
    const res = new LogsQueryOptions();

    res.timeOffset = ObjectSerializer.deserialize(
      data.timeOffset,
      "number",
      "int64"
    );

    res.timezone = ObjectSerializer.deserialize(data.timezone, "string", "");

    return res;
  }

  static serialize(data: LogsQueryOptions): { [key: string]: any } {
    const attributeTypes = LogsQueryOptions.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.timeOffset = ObjectSerializer.serialize(
      data.timeOffset,
      "number",
      "int64"
    );

    res.timezone = ObjectSerializer.serialize(data.timezone, "string", "");

    return res;
  }

  public constructor() {}
}