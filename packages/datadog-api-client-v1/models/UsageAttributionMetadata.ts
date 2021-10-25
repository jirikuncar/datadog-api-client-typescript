/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageAttributionAggregatesBody } from "./UsageAttributionAggregatesBody";
import { UsageAttributionPagination } from "./UsageAttributionPagination";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The object containing document metadata.
 */

export class UsageAttributionMetadata {
  /**
   * An array of available aggregates.
   */
  "aggregates"?: Array<UsageAttributionAggregatesBody>;
  "pagination"?: UsageAttributionPagination;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    aggregates: {
      baseName: "aggregates",
      type: "Array<UsageAttributionAggregatesBody>",
      format: "",
    },
    pagination: {
      baseName: "pagination",
      type: "UsageAttributionPagination",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageAttributionMetadata.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageAttributionMetadata {
    const res = new UsageAttributionMetadata();

    res.aggregates = ObjectSerializer.deserialize(
      data.aggregates,
      "Array<UsageAttributionAggregatesBody>",
      ""
    );

    res.pagination = ObjectSerializer.deserialize(
      data.pagination,
      "UsageAttributionPagination",
      ""
    );

    return res;
  }

  static serialize(data: UsageAttributionMetadata): { [key: string]: any } {
    const attributeTypes = UsageAttributionMetadata.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.aggregates = ObjectSerializer.serialize(
      data.aggregates,
      "Array<UsageAttributionAggregatesBody>",
      ""
    );

    res.pagination = ObjectSerializer.serialize(
      data.pagination,
      "UsageAttributionPagination",
      ""
    );

    return res;
  }

  public constructor() {}
}