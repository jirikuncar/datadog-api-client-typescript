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
 * The hours of indexed spans usage.
 */

export class UsageIndexedSpansHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of spans indexed.
   */
  "indexedEventsCount"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    indexedEventsCount: {
      baseName: "indexed_events_count",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageIndexedSpansHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageIndexedSpansHour {
    const res = new UsageIndexedSpansHour();

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    res.indexedEventsCount = ObjectSerializer.deserialize(
      data.indexed_events_count,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageIndexedSpansHour): { [key: string]: any } {
    const attributeTypes = UsageIndexedSpansHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time");

    res.indexed_events_count = ObjectSerializer.serialize(
      data.indexedEventsCount,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}