/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlertValueWidgetDefinitionType } from "./AlertValueWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";

export class AlertValueWidgetDefinition {
  /**
   * ID of the alert to use in the widget.
   */
  "alertId": string;
  /**
   * Number of decimal to show. If not defined, will use the raw value.
   */
  "precision"?: number;
  "textAlign"?: WidgetTextAlign;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of value in the widget.
   */
  "titleSize"?: string;
  "type": AlertValueWidgetDefinitionType;
  /**
   * Unit to display with the value.
   */
  "unit"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      name: string;
      baseName: string;
      type: string;
      required: boolean;
      format?: string;
      enumValues?: any;
    };
  } = {
    alertId: {
      name: "alertId",
      baseName: "alert_id",
      type: "string",
      required: true,
      format: "",
    },
    precision: {
      name: "precision",
      baseName: "precision",
      type: "number",
      required: false,
      format: "int64",
    },
    textAlign: {
      name: "textAlign",
      baseName: "text_align",
      type: "WidgetTextAlign",
      required: false,
      format: "",
    },
    title: {
      name: "title",
      baseName: "title",
      type: "string",
      required: false,
      format: "",
    },
    titleAlign: {
      name: "titleAlign",
      baseName: "title_align",
      type: "WidgetTextAlign",
      required: false,
      format: "",
    },
    titleSize: {
      name: "titleSize",
      baseName: "title_size",
      type: "string",
      required: false,
      format: "",
    },
    type: {
      name: "type",
      baseName: "type",
      type: "AlertValueWidgetDefinitionType",
      required: true,
      format: "",
    },
    unit: {
      name: "unit",
      baseName: "unit",
      type: "string",
      required: false,
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AlertValueWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
