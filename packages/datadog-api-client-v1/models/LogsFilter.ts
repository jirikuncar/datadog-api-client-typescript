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
 * Filter for logs.
 */

export class LogsFilter {
  /**
   * The filter query.
   */
  "query"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    query: {
      baseName: "query",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsFilter.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsFilter {
    const res = new LogsFilter();

    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    return res;
  }

  static serialize(data: LogsFilter): { [key: string]: any } {
    const attributeTypes = LogsFilter.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.query = ObjectSerializer.serialize(data.query, "string", "");

    return res;
  }

  public constructor() {}
}