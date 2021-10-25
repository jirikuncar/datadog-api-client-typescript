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
 * Number of lambda functions and sum of the invocations of all lambda functions for each hour for a given organization.
 */

export class UsageLambdaHour {
  /**
   * Contains the number of different functions for each region and AWS account.
   */
  "funcCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the sum of invocations of all functions.
   */
  "invocationsSum"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    funcCount: {
      baseName: "func_count",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    invocationsSum: {
      baseName: "invocations_sum",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageLambdaHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageLambdaHour {
    const res = new UsageLambdaHour();

    res.funcCount = ObjectSerializer.deserialize(
      data.func_count,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    res.invocationsSum = ObjectSerializer.deserialize(
      data.invocations_sum,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageLambdaHour): { [key: string]: any } {
    const attributeTypes = UsageLambdaHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.func_count = ObjectSerializer.serialize(
      data.funcCount,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time");

    res.invocations_sum = ObjectSerializer.serialize(
      data.invocationsSum,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}