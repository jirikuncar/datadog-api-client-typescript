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
 * The attribute object associated with the SLO correction to be created.
 */

export class SLOCorrectionCreateRequestAttributes {
  "category": SLOCorrectionCategory;
  /**
   * Description of the correction being made.
   */
  "description"?: string;
  /**
   * Ending time of the correction in epoch seconds.
   */
  "end": number;
  /**
   * ID of the SLO that this correction will be applied to.
   */
  "sloId": string;
  /**
   * Starting time of the correction in epoch seconds.
   */
  "start": number;
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
    sloId: {
      baseName: "slo_id",
      type: "string",
      format: "",
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
    return SLOCorrectionCreateRequestAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SLOCorrectionCreateRequestAttributes {
    const res = new SLOCorrectionCreateRequestAttributes();

    if (data.category === undefined) {
      throw new TypeError(
        "missing required attribute 'category' on 'SLOCorrectionCreateRequestAttributes' object"
      );
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
      const raw = new SLOCorrectionCreateRequestAttributes();
      raw.unparsedObject = data;
      return raw;
    }

    res.description = ObjectSerializer.deserialize(
      data.description,
      "string",
      ""
    );

    if (data.end === undefined) {
      throw new TypeError(
        "missing required attribute 'end' on 'SLOCorrectionCreateRequestAttributes' object"
      );
    }
    res.end = ObjectSerializer.deserialize(data.end, "number", "int64");

    if (data.slo_id === undefined) {
      throw new TypeError(
        "missing required attribute 'slo_id' on 'SLOCorrectionCreateRequestAttributes' object"
      );
    }
    res.sloId = ObjectSerializer.deserialize(data.slo_id, "string", "");

    if (data.start === undefined) {
      throw new TypeError(
        "missing required attribute 'start' on 'SLOCorrectionCreateRequestAttributes' object"
      );
    }
    res.start = ObjectSerializer.deserialize(data.start, "number", "int64");

    res.timezone = ObjectSerializer.deserialize(data.timezone, "string", "");

    return res;
  }

  static serialize(data: SLOCorrectionCreateRequestAttributes): {
    [key: string]: any;
  } {
    const attributeTypes =
      SLOCorrectionCreateRequestAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.category === undefined) {
      throw new TypeError(
        "missing required attribute 'category' on 'SLOCorrectionCreateRequestAttributes' object"
      );
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

    if (data.end === undefined) {
      throw new TypeError(
        "missing required attribute 'end' on 'SLOCorrectionCreateRequestAttributes' object"
      );
    }
    res.end = ObjectSerializer.serialize(data.end, "number", "int64");

    if (data.sloId === undefined) {
      throw new TypeError(
        "missing required attribute 'slo_id' on 'SLOCorrectionCreateRequestAttributes' object"
      );
    }
    res.slo_id = ObjectSerializer.serialize(data.sloId, "string", "");

    if (data.start === undefined) {
      throw new TypeError(
        "missing required attribute 'start' on 'SLOCorrectionCreateRequestAttributes' object"
      );
    }
    res.start = ObjectSerializer.serialize(data.start, "number", "int64");

    res.timezone = ObjectSerializer.serialize(data.timezone, "string", "");

    return res;
  }

  public constructor() {}
}