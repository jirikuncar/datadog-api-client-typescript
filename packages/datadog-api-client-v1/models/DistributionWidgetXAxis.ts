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
 * X Axis controls for the distribution widget.
 */

export class DistributionWidgetXAxis {
  /**
   * True includes zero.
   */
  "includeZero"?: boolean;
  /**
   * Specifies maximum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
   */
  "max"?: string;
  /**
   * Specifies minimum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
   */
  "min"?: string;
  /**
   * Specifies the scale type. Possible values are `linear`.
   */
  "scale"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    includeZero: {
      baseName: "include_zero",
      type: "boolean",
      format: "",
    },
    max: {
      baseName: "max",
      type: "string",
      format: "",
    },
    min: {
      baseName: "min",
      type: "string",
      format: "",
    },
    scale: {
      baseName: "scale",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DistributionWidgetXAxis.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): DistributionWidgetXAxis {
    const res = new DistributionWidgetXAxis();

    res.includeZero = ObjectSerializer.deserialize(
      data.include_zero,
      "boolean",
      ""
    );

    res.max = ObjectSerializer.deserialize(data.max, "string", "");

    res.min = ObjectSerializer.deserialize(data.min, "string", "");

    res.scale = ObjectSerializer.deserialize(data.scale, "string", "");

    return res;
  }

  static serialize(data: DistributionWidgetXAxis): { [key: string]: any } {
    const attributeTypes = DistributionWidgetXAxis.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.include_zero = ObjectSerializer.serialize(
      data.includeZero,
      "boolean",
      ""
    );

    res.max = ObjectSerializer.serialize(data.max, "string", "");

    res.min = ObjectSerializer.serialize(data.min, "string", "");

    res.scale = ObjectSerializer.serialize(data.scale, "string", "");

    return res;
  }

  public constructor() {}
}