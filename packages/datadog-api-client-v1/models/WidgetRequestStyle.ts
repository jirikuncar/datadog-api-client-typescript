/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WidgetLineType } from "./WidgetLineType";
import { WidgetLineWidth } from "./WidgetLineWidth";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Define request widget style.
 */

export class WidgetRequestStyle {
  "lineType"?: WidgetLineType;
  "lineWidth"?: WidgetLineWidth;
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    lineType: {
      baseName: "line_type",
      type: "WidgetLineType",
      format: "",
    },
    lineWidth: {
      baseName: "line_width",
      type: "WidgetLineWidth",
      format: "",
    },
    palette: {
      baseName: "palette",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return WidgetRequestStyle.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): WidgetRequestStyle {
    const res = new WidgetRequestStyle();

    if (["dashed", "dotted", "solid", undefined].includes(data.line_type)) {
      res.lineType = data.line_type;
    } else {
      const raw = new WidgetRequestStyle();
      raw.unparsedObject = data;
      return raw;
    }

    if (["normal", "thick", "thin", undefined].includes(data.line_width)) {
      res.lineWidth = data.line_width;
    } else {
      const raw = new WidgetRequestStyle();
      raw.unparsedObject = data;
      return raw;
    }

    res.palette = ObjectSerializer.deserialize(data.palette, "string", "");

    return res;
  }

  static serialize(data: WidgetRequestStyle): { [key: string]: any } {
    const attributeTypes = WidgetRequestStyle.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (["dashed", "dotted", "solid", undefined].includes(data.lineType)) {
      res.line_type = data.lineType;
    } else {
      throw TypeError(`invalid enum value ${data.lineType} for lineType`);
    }

    if (["normal", "thick", "thin", undefined].includes(data.lineWidth)) {
      res.line_width = data.lineWidth;
    } else {
      throw TypeError(`invalid enum value ${data.lineWidth} for lineWidth`);
    }

    res.palette = ObjectSerializer.serialize(data.palette, "string", "");

    return res;
  }

  public constructor() {}
}