/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlertValueWidgetDefinitionType } from "./AlertValueWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { HttpFile } from "../http/http";

/**
 * Alert values are query values showing the current value of the metric in any monitor defined on your system.
 */
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

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "alertId",
      baseName: "alert_id",
      type: "string",
      format: "",
    },
    {
      name: "precision",
      baseName: "precision",
      type: "number",
      format: "int64",
    },
    {
      name: "textAlign",
      baseName: "text_align",
      type: "WidgetTextAlign",
      format: "",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
      format: "",
    },
    {
      name: "titleAlign",
      baseName: "title_align",
      type: "WidgetTextAlign",
      format: "",
    },
    {
      name: "titleSize",
      baseName: "title_size",
      type: "string",
      format: "",
    },
    {
      name: "type",
      baseName: "type",
      type: "AlertValueWidgetDefinitionType",
      format: "",
    },
    {
      name: "unit",
      baseName: "unit",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return AlertValueWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
