/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOCorrectionCategory } from "./SLOCorrectionCategory";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The attribute object associated with the SLO correction to be updated.
 */

export class SLOCorrectionUpdateRequestAttributes {
  "category"?: SLOCorrectionCategory;
  /**
   * Description of the correction being made.
   */
  "description"?: string;
  /**
   * Ending time of the correction in epoch seconds.
   */
  "end"?: number;
  /**
   * Starting time of the correction in epoch seconds.
   */
  "start"?: number;
  /**
   * The timezone to display in the UI for the correction times (defaults to \"UTC\").
   */
  "timezone"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    category: {
      baseName: "category",
      type: "SLOCorrectionCategory",
      format: "",
    },
    description: {
      baseName: "description",
      type: "string",
      format: "",
    },
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    start: {
      baseName: "start",
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
    return SLOCorrectionUpdateRequestAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SLOCorrectionUpdateRequestAttributes {
    const res = new SLOCorrectionUpdateRequestAttributes();

    if (
      [
        "Scheduled Maintenance",
        "Outside Business Hours",
        "Deployment",
        "Other",
        undefined,
      ].includes(data.category)
    ) {
      res.category = data.category;
    } else {
      const raw = new SLOCorrectionUpdateRequestAttributes();
      raw.unparsedObject = data;
      return raw;
    }

    res.description = ObjectSerializer.deserialize(
      data.description,
      "string",
      ""
    );

    res.end = ObjectSerializer.deserialize(data.end, "number", "int64");

    res.start = ObjectSerializer.deserialize(data.start, "number", "int64");

    res.timezone = ObjectSerializer.deserialize(data.timezone, "string", "");

    return res;
  }

  static serialize(data: SLOCorrectionUpdateRequestAttributes): {
    [key: string]: any;
  } {
    const attributeTypes =
      SLOCorrectionUpdateRequestAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (
      [
        "Scheduled Maintenance",
        "Outside Business Hours",
        "Deployment",
        "Other",
        undefined,
      ].includes(data.category)
    ) {
      res.category = data.category;
    } else {
      throw TypeError(`invalid enum value ${data.category} for category`);
    }

    res.description = ObjectSerializer.serialize(
      data.description,
      "string",
      ""
    );

    res.end = ObjectSerializer.serialize(data.end, "number", "int64");

    res.start = ObjectSerializer.serialize(data.start, "number", "int64");

    res.timezone = ObjectSerializer.serialize(data.timezone, "string", "");

    return res;
  }

  public constructor() {}
}