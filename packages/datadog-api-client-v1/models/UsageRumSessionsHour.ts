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
 * Number of RUM Sessions recorded for each hour for a given organization.
 */

export class UsageRumSessionsHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of RUM Sessions.
   */
  "sessionCount"?: number;
  /**
   * Contains the number of mobile RUM Sessions on Android (data available beginning December 1, 2020).
   */
  "sessionCountAndroid"?: number;
  /**
   * Contains the number of mobile RUM Sessions on iOS (data available beginning December 1, 2020).
   */
  "sessionCountIos"?: number;

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
    sessionCount: {
      baseName: "session_count",
      type: "number",
      format: "int64",
    },
    sessionCountAndroid: {
      baseName: "session_count_android",
      type: "number",
      format: "int64",
    },
    sessionCountIos: {
      baseName: "session_count_ios",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageRumSessionsHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageRumSessionsHour {
    const res = new UsageRumSessionsHour();

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    res.sessionCount = ObjectSerializer.deserialize(
      data.session_count,
      "number",
      "int64"
    );

    res.sessionCountAndroid = ObjectSerializer.deserialize(
      data.session_count_android,
      "number",
      "int64"
    );

    res.sessionCountIos = ObjectSerializer.deserialize(
      data.session_count_ios,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageRumSessionsHour): { [key: string]: any } {
    const attributeTypes = UsageRumSessionsHour.getAttributeTypeMap();
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

    res.session_count = ObjectSerializer.serialize(
      data.sessionCount,
      "number",
      "int64"
    );

    res.session_count_android = ObjectSerializer.serialize(
      data.sessionCountAndroid,
      "number",
      "int64"
    );

    res.session_count_ios = ObjectSerializer.serialize(
      data.sessionCountIos,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}