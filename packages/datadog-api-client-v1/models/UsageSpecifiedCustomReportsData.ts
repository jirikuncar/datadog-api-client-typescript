/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageReportsType } from "./UsageReportsType";
import { UsageSpecifiedCustomReportsAttributes } from "./UsageSpecifiedCustomReportsAttributes";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing date and type for specified custom reports.
 */

export class UsageSpecifiedCustomReportsData {
  "attributes"?: UsageSpecifiedCustomReportsAttributes;
  /**
   * The date for specified custom reports.
   */
  "id"?: string;
  "type"?: UsageReportsType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "UsageSpecifiedCustomReportsAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "UsageReportsType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageSpecifiedCustomReportsData.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): UsageSpecifiedCustomReportsData {
    const res = new UsageSpecifiedCustomReportsData();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "UsageSpecifiedCustomReportsAttributes",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (["reports", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new UsageSpecifiedCustomReportsData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: UsageSpecifiedCustomReportsData): {
    [key: string]: any;
  } {
    const attributeTypes =
      UsageSpecifiedCustomReportsData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "UsageSpecifiedCustomReportsAttributes",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (["reports", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}