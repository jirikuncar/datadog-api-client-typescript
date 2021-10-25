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
 * Ingested spans usage for a given organization for a given hour.
 */

export class UsageIngestedSpansHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the total number of bytes ingested during a given hour.
   */
  "ingestedEventsBytes"?: number;

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
    ingestedEventsBytes: {
      baseName: "ingested_events_bytes",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageIngestedSpansHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageIngestedSpansHour {
    const res = new UsageIngestedSpansHour();

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    res.ingestedEventsBytes = ObjectSerializer.deserialize(
      data.ingested_events_bytes,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageIngestedSpansHour): { [key: string]: any } {
    const attributeTypes = UsageIngestedSpansHour.getAttributeTypeMap();
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

    res.ingested_events_bytes = ObjectSerializer.serialize(
      data.ingestedEventsBytes,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}