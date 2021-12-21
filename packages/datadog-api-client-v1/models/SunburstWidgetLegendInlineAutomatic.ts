/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SunburstWidgetLegendInlineAutomaticType } from "./SunburstWidgetLegendInlineAutomaticType";

export class SunburstWidgetLegendInlineAutomatic {
  /**
   * Whether to hide the percentages of the groups.
   */
  "hidePercent"?: boolean;
  /**
   * Whether to hide the values of the groups.
   */
  "hideValue"?: boolean;
  "type": SunburstWidgetLegendInlineAutomaticType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    hidePercent: {
      baseName: "hide_percent",
      type: "boolean",
    },
    hideValue: {
      baseName: "hide_value",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "SunburstWidgetLegendInlineAutomaticType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return SunburstWidgetLegendInlineAutomatic.attributeTypeMap;
  }

  public constructor() {}
}